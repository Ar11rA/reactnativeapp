import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import CardSection from '../CardSection';
import Card from '../Card';
import Button from '../Button';
import Input from '../Input';
import loginFormStyles from './LoginForm.style'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };
  
  handleLogin() {
    const {email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication failed!!' })
          })
      })
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
          <Button onPress={this.handleLogin.bind(this)} text="Log in"/>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm