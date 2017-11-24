import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CardSection from '../CardSection';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class EmployeeListItem extends Component {
  render() {
    return ( 
      <CardSection>
        <Text style={{ fontSize: 18, paddingLeft: 15 }}> {this.props.employee.name} </Text>
      </CardSection>
    );
  }
}

export default EmployeeListItem;