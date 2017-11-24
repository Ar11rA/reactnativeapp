import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions'; 
import Card from '../Card';
import CardSection from '../CardSection';
import Input from '../Input';
import Button from '../Button';

class EmployeeCreationForm extends Component { 

  createEmployee() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input label="name" placeholder="Tyler" value={this.props.name} onChangeText = {(text) => this.props.employeeUpdate({ prop: 'name', value: text })} />
        </CardSection>
        <CardSection>
          <Input label="phone" placeholder="9999111111" value={this.props.phone} onChangeText = {(text) => this.props.employeeUpdate({ prop: 'phone', value: text })} /> 
        </CardSection>
        <CardSection>
          <Picker 
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={ (day) => this.props.employeeUpdate({ prop: 'shift', value: day }) }
          >
            <Picker.Item label="Mon" value="Mon" />
            <Picker.Item label="Tues" value="Tues" />
            <Picker.Item label="Wed" value="Wed" />
            <Picker.Item label="Thurs" value="Thurs" />
            <Picker.Item label="Fri" value="Fri" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button text='Create' onPress={this.createEmployee.bind(this)}/>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.employeeForm.name,
    phone: state.employeeForm.phone,
    shift: state.employeeForm.shift
  };
};

export default connect(mapStateToProps, actions)(EmployeeCreationForm);