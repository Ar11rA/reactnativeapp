import React from 'react';
import { View, Image, Linking, Text } from 'react-native';
import Styles from './Album.style'
import Card from '../Card'
import CardSection from '../CardSection'
import Button from '../Button'

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
        <Button onPress={ () => Linking.openURL(props.album.url) } text="Buy Now"/>
      </CardSection>
    </Card>
  );
}

export default AlbumDetail