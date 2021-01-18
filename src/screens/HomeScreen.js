import React, { useEffect, useContext } from 'react';
import {
  StyleSheet,
  RefreshControl,
  FlatList,
  ActivityIndicator,
  View,
} from 'react-native';
import { Context as ApiContext } from '../stores/ApiContext';
import Photo from '../components/Photo';
import { isCloseToBottom } from '../utils';
import FastImage from 'react-native-fast-image';

const HomeScreen = () => {
  const {
    state: { images, refreshing, page },
    fetchImages,
    onRefreshImages,
  } = useContext(ApiContext);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const renderItem = ({ item, index }) => {
    const {
      urls: { regular: imageUrl },
      likes,
      created_at: createdAt,
      description,
      alt_description: altDescription,
      user: {
        name: userName,
        profile_image: { medium: profileImage },
      },
    } = { ...item };
    const caption = description || altDescription;
    const priority =
      index < 2 ? FastImage.priority.high : FastImage.priority.normal;

    return (
      <Photo
        imageUrl={imageUrl}
        createdAt={createdAt}
        likes={likes}
        caption={caption}
        userName={userName}
        profileImage={profileImage}
        priority={priority}
      />
    );
  };

  const onScroll = (event) => {
    if (!isCloseToBottom(event.nativeEvent)) {
      return;
    }

    if (refreshing) {
      return;
    }

    fetchImages(page + 1);
  };

  const onRefresh = () => {
    if (refreshing) {
      return;
    }

    onRefreshImages();
  };

  const { activityIndicatorStyle, container } = styles;

  if (!images || images.length === 0) {
    return (
      <View style={activityIndicatorStyle}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  return (
    <FlatList
      data={images}
      onScroll={(event) => onScroll(event)}
      keyExtractor={(item, index) => index.toString()}
      refreshing={refreshing}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      style={container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
