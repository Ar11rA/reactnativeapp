import React from 'react';
import {Image, Linking, View, Text } from 'react-native';
const AlbumDetail = (props) => {
  return (
    <View >
      <Text>{props.album.title}</Text>
      <Text>{props.album.artist}</Text>
      <Text onPress={() => Linking.openURL(props.album.url)}>{props.album.url}</Text>
      <Image style={{width: 50, height: 50}} source={{uri: props.album.image}} />
    </View>
  );
}

export default AlbumDetail