import React from 'react';
import { View, Image, Linking, Text } from 'react-native';
import Styles from './Album.style';
import Card from '../Card';
import CardSection from '../CardSection';
import Button from '../Button';

const AlbumDetail = (props) => {

  const { headerStyle, headerTextStyle, thumbnailStyle, thumbnailContainerStyle, albumImageStyle } = Styles;

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
};

const defaultProps = {
  album: {
    title: 'Taylor Swift',
    artist: 'Taylor Swift',
    url: 'https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg',
    thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg'
  }
};
AlbumDetail.defaultProps = defaultProps;

export default AlbumDetail;