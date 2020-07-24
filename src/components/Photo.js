import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Photo = ({ imageUrl, likes, userName, profileImage }) => {
  const { container, imageStyle } = styles;
  console.log({ imageUrl, likes, userName, profileImage });
  return (
    <View style={container}>
      <Image style={imageStyle} source={{ uri: imageUrl }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
  },
  imageStyle: {
    aspectRatio: 1.5,
    width: '100%',
  },
});

export default Photo;
