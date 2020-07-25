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
      created_at: createdAt,
      description,
      alt_description: altDescription,
      user: {
        name: userName,
        profile_image: { medium: profileImage },
      },
    } = { ...item };
    const caption = description || altDescription;

    return (
      <Photo
        imageUrl={imageUrl}
        createdAt={createdAt}
        likes={likes}
        caption={caption}
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
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
