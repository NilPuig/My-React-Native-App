import React, { useEffect, useContext } from 'react';
import { Text, RefreshControl, FlatList } from 'react-native';
import { Context as ApiContext } from '../stores/ApiContext';
import Photo from '../components/Photo';

const HomeScreen = () => {
  const {
    state: { images, refreshing },
    fetchImages,
    onRefreshImages,
  } = useContext(ApiContext);

  useEffect(() => {
    fetchImages();
  }, []);

  const renderItem = ({ item }) => {
    const {
      urls: { regular: imageUrl },
      likes,
      user: {
        name: userName,
        profile_image: { medium: profileImage },
      },
    } = { ...item };

    return (
      <Photo
        imageUrl={imageUrl}
        likes={likes}
        userName={userName}
        profileImage={profileImage}
      />
    );
  };

  return (
    <FlatList
      data={images}
      keyExtractor={(item, index) => index.toString()}
      refreshing={refreshing}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefreshImages} />
      }
      renderItem={renderItem}
    />
  );
};

export default HomeScreen;
