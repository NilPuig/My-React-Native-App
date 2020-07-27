import React from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

const Photo = ({ profileImage }) => {
  const { profileImageStyle } = styles;

  return <FastImage style={profileImageStyle} source={{ uri: profileImage }} />;
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
