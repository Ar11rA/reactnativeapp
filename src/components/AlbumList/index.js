import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from '../AlbumDetail'
import Spinner from '../Spinner'
import Button from '../Button'
class AlbumList extends Component {
  constructor(props) {
    super(props)
  }
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
    if(this.state.albums.length === 0)
      return (
        <View>
          <Spinner />
        </View>
      )
    return (
      <ScrollView>
        {this.displayTitles(this.state.albums)}
        <Button onPress={() => this.props.onLogOut()} text='Log out' />
      </ScrollView>
    );
  }
}

export default AlbumList