import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import EmployeeListItem from '../EmployeeListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeeFetch();
    this.createDataSource(this.props);
    console.log('1', this.props.employees);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
    console.log('2', nextProps.employees);
  }

  createDataSource(props) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(props.employees);
  }

  renderRow(employee) {
    console.log('here 5');
    console.log(employee);
    return <EmployeeListItem employee={employee} />;
  }

  render() {
    console.log('main', this.props.employees);
    return (
      <ListView 
        enableEmptySections 
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });
  console.log();
  console.log('mps', employees);
  return { employees };
};
export default connect(mapStateToProps, actions)(EmployeeList);