import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
class LibraryList extends Component {

  render() {
    console.log(this.props)
    return(
      <View>
        <Text>hi</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList);