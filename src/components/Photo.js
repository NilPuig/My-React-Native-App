import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image';

import { numberWithCommas, getTimeSince } from '../utils';
import { colors } from '../globalStyles';
import Avatar from './Avatar';

const Photo = ({
  imageUrl,
  likes,
  userName,
  profileImage,
  caption,
  createdAt,
  priority = FastImage.priority.normal,
}) => {
  const {
    container,
    imageStyle,
    photoInfoContainer,
    boldText,
    descriptionContainer,
    timeSinceStyle,
    heartIcon,
    userInfoContainer,
  } = styles;

  const [liked, setLiked] = useState(false);
  const parsedLikes = numberWithCommas(liked ? likes + 1 : likes);
  const timeSince = getTimeSince(createdAt);

  return (
    <View style={container}>
      <View style={userInfoContainer}>
        <Avatar profileImage={profileImage} />
        <Text style={boldText}>{userName}</Text>
      </View>

      <FastImage style={imageStyle} source={{ uri: imageUrl, priority }} />
      <TouchableOpacity
        style={photoInfoContainer}
        activeOpacity={1}
        onPress={() => setLiked(!liked)}
      >
        <Icon
          name={liked ? 'heart' : 'hearto'}
          color={liked ? colors.heartColor : colors.textPrimary}
          size={18}
          style={heartIcon}
        />
      </TouchableOpacity>
      <View style={photoInfoContainer}>
        <Text style={boldText}>
          {parsedLikes} {likes !== 1 ? 'likes' : 'like'}
        </Text>
        <View style={descriptionContainer}>
          <Text style={boldText}>{userName}</Text>
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
    marginBottom: 10,
  },
  userInfoContainer: {
    flexDirection: 'row',
    margin: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  imageStyle: {
    aspectRatio: 1.5,
    width: '100%',
  },
  photoInfoContainer: {
    margin: 12,
    marginBottom: 0,
  },
  boldText: {
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
