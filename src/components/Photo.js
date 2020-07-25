import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

import { numberWithCommas, getTimeSince } from '../utils';

const Photo = ({
  imageUrl,
  likes,
  userName,
  profileImage,
  caption,
  createdAt,
}) => {
  const {
    container,
    imageStyle,
    photoInfoContainer,
    boltText,
    descriptionContainer,
    timeSinceStyle,
  } = styles;

  const parsedLikes = numberWithCommas(likes);
  const timeSince = getTimeSince(createdAt);

  return (
    <View style={container}>
      <Image style={imageStyle} source={{ uri: imageUrl }} />
      <View style={photoInfoContainer}>
        <Text style={boltText}>
          {parsedLikes} {likes !== 1 ? 'likes' : 'like'}
        </Text>
        <View style={descriptionContainer}>
          <Text style={boltText}>{userName}</Text>
          {caption && <Text>{caption}</Text>}
        </View>

        {createdAt && timeSince && (
          <Text style={timeSinceStyle}>{`${timeSince} ago`}</Text>
        )}
      </View>
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
  photoInfoContainer: {
    margin: 12,
  },
  boltText: {
    fontWeight: '600',
  },
  descriptionContainer: {
    marginTop: 7,
  },
  timeSinceStyle: {
    marginTop: 7,
    fontWeight: '300',
    color: '#404040',
    fontSize: 12,
  },
});

export default Photo;
