import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { numberWithCommas, getTimeSince } from '../utils';
import { colors } from '../globalStyles';

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
    heartIcon,
  } = styles;

  const parsedLikes = numberWithCommas(likes);
  const timeSince = getTimeSince(createdAt);
  const [liked, setLiked] = useState(false);

  return (
    <View style={container}>
      <View style={descriptionContainer}>
        <Image style={imageStyle} source={{ uri: profileImage }} />
        <Text style={boltText}>{userName}</Text>
      </View>

      <Image style={imageStyle} source={{ uri: imageUrl }} />
      <TouchableOpacity activeOpacity={1} onPress={() => setLiked(!liked)}>
        <Icon
          name={liked ? 'heart' : 'hearto'}
          color={liked ? colors.heartColor : colors.textPrimary}
          size={18}
          style={heartIcon}
        />
      </TouchableOpacity>
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
  userInfoContainer: {
    flexDirection: 'row',
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
  heartIcon: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Photo;
