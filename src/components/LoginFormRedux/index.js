import React, {Component} from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import Card from '../Card';
import CardSection from '../CardSection';
import Button from '../Button';
import Input from '../Input';
import Spinner from '../Spinner';
import * as actions from '../../actions';

class LoginFormRedux extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  
  onLoginPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  renderButton() {
    return this.props.loading ? <Spinner size='large'/> : <Button onPress={this.onLoginPress.bind(this)} text='Log in'/>;
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input label='Email' placeholder='Email' password={false} onChangeText={this.onEmailChange.bind(this)} value={this.props.email} /> 
        </CardSection>
        <CardSection> 
          <Input label='Password' placeholder='Password' password={true} onChangeText={this.onPasswordChange.bind(this)} value={this.props.password} /> 
        </CardSection>
        <Text style={{ color: 'red', fontSize: 18, alignSelf: 'center' }}>{this.props.error}</Text>
        <CardSection>
          {this.renderButton()}
         
        </CardSection>
      </Card>
    );
  }
}
 
const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    user: state.auth.user,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

const mapDispatchToProps = actions;

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormRedux);