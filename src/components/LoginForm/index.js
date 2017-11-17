import React, { Component } from 'react';
import { View } from 'react-native';
import CardSection from '../CardSection';
import Card from '../Card';
import Button from '../Button';
import Input from '../Input';

class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  };

  render(){
    return (
      <Card>
        <CardSection>
          <Input onChangeText={username => this.setState({ username })} value={this.state.username} label='Email' placeholder='Email' password={false} /> 
        </CardSection>
        <CardSection>
          <Input onChangeText={password => this.setState({ password })} value={this.state.password} label='Password' placeholder='Password' password={true}/> 
        </CardSection>
        <CardSection>
          <Button onPress={() => Linking.openURL(props.album.url) } text="Log in"/>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm