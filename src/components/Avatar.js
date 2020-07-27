import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Photo = ({ profileImage }) => {
  const { profileImageStyle } = styles;

  return <Image style={profileImageStyle} source={{ uri: profileImage }} />;
};

const profileImageWidth = 30;

const styles = StyleSheet.create({
  profileImageStyle: {
    height: profileImageWidth,
    width: profileImageWidth,
    borderRadius: profileImageWidth / 2,
    marginRight: 10,
  },
});

export default Photo;
