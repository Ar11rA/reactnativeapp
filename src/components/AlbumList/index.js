import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from '../AlbumDetail'
//import Styles from './albumList.style'

class AlbumList extends Component {

  state = {
    albums:  []
  };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) =>this.setState({albums: response.data}));
  }

  displayTitles(items) {
    return items.map((item) => <AlbumDetail key={item.title} album={item} />)
  }

  render() {
    return (
      <ScrollView>
        {this.displayTitles(this.state.albums)}
      </ScrollView>
    );
  }
}

export default AlbumList