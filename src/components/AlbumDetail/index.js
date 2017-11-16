import React from 'react';
import {Image, Linking, Text } from 'react-native';
import Card from '../Card'
const AlbumDetail = (props) => {
  return (
    <Card>
      <Text>{props.album.title}</Text>
      <Text>{props.album.artist}</Text>
      <Text onPress={() => Linking.openURL(props.album.url)}>{props.album.url}</Text>
      <Image style={{width: 50, height: 50}} source={{uri: props.album.image}} />
    </Card>
  );
}

export default AlbumDetail