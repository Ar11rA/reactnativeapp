import React from 'react';
import { View, Image, Linking, Text, Button } from 'react-native';
import Card from '../Card'
import CardSection from '../CardSection'
import Styles from './Album.style'

const AlbumDetail = (props) => {

  const { headerStyle, headerTextStyle, thumbnailStyle, thumbnailContainerStyle, albumImageStyle } = Styles

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: props.album.thumbnail_image }} />
        </View>
        <View style={headerStyle}>
          <Text style={headerTextStyle}>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={albumImageStyle} source={{uri: props.album.image}} />
      </CardSection>
      <CardSection>
        <Button title="Learn More" />
      </CardSection>
    </Card>
  );
}

export default AlbumDetail