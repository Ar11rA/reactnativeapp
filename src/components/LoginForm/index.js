import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import CardSection from '../CardSection';
import Card from '../Card';
import Button from '../Button';
import Input from '../Input';
import Spinner from '../Spinner'
import loginFormStyles from './LoginForm.style'


class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };
  
  handleLogin() {
    const {email, password} = this.state;
    this.setState({ error: '', loading: true })
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => this.onLoginSuccess())
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => this.onLoginSuccess())
          .catch(() => this.onLoginFail())
      })
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    })
  }

  onLoginFail() {
    this.setState({ 
      error: 'Authentication failed!!',
      loading: false
     })
  }
  
  renderButton() {
  return this.state.loading ? <Spinner size='small'/> : <Button onPress={this.handleLogin.bind(this)} text='Log in'/>;
  }


  render() {
    const { errorStyle } = loginFormStyles;
    return (
      <Card>
        <CardSection>
          <Input onChangeText={email => this.setState({ email })} value={this.state.email} label='Email' placeholder='Email' password={false} /> 
        </CardSection>
        <CardSection>
          <Input onChangeText={password => this.setState({ password })} value={this.state.password} label='Password' placeholder='Password' password={true}/> 
        </CardSection>
        <Text style={errorStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm