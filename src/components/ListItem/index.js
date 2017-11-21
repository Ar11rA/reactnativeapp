import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import CardSection from '../CardSection';
import ListItemStyle from './ListItem.style';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class ListItem extends Component {
  
  renderDescription() {
    if(this.props.library.id === this.props.selectedLibraryId) {
      return (
        <Text>{this.props.library.description}</Text>
      )
    }
  }

  render() {
    const { titleStyle } = ListItemStyle
    const { id, title } = this.props.library
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}> {title} </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const mapStateToProps = (state) => {
  return {selectedLibraryId: state.selectedLibraryId}
}

// const mapDispatchToProps = (dispatch) => ({
//   dispatch
// });

export default connect(mapStateToProps, actions)(ListItem);