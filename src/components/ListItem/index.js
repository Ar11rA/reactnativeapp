import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import CardSection from '../CardSection';
import ListItemStyle from './ListItem.style';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class ListItem extends Component {
  
  componentWillUpdate() {
    LayoutAnimation.linear()
  }

  renderDescription() {
    const { descriptionStyle } = ListItemStyle
    if(this.props.expanded) {
      return (
        <CardSection>
          <Text style={descriptionStyle}>{this.props.library.description}</Text>
        </CardSection>
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
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return {expanded: expanded}
}

const mapDispatchToProps = actions;

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);