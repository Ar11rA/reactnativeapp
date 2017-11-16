import React from 'react';
import { Image, Linking, Text, Button } from 'react-native';
import Card from '../Card'
import CardSection from '../CardSection'
const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Image source={{uri: props.album.thumbnail_image}} />
        <Text>{props.album.title}</Text>
        <Text>{props.album.artist}</Text>
      </CardSection>
      <CardSection>
        <Text>{props.album.title}</Text>
        <Text>{props.album.artist}</Text>
        <Text onPress={() => Linking.openURL(props.album.url)}>{props.album.url}</Text>
        <Image style={{width: 50, height: 50}} source={{uri: props.album.image}} />
      </CardSection>
      <CardSection>
        <Button title="Learn More" />
      </CardSection>
    </Card>
  );
}

export default AlbumDetail