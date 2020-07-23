import React, { useEffect, useContext } from 'react';
import { Text, RefreshControl, FlatList } from 'react-native';
import { Context as ApiContext } from '../stores/ApiContext';

const HomeScreen = () => {
  const {
    state: { images, refreshing },
    fetchImages,
    onRefreshImages,
  } = useContext(ApiContext);

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <FlatList
      data={images}
      keyExtractor={(item, index) => index.toString()}
      refreshing={refreshing}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefreshImages} />
      }
      renderItem={({ item }) => <Text>{item.id}</Text>}
    />
  );
};

export default HomeScreen;
