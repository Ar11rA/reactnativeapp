/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import firebase from 'firebase'

export default class App extends Component {

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyBHrU8ZygukpXwmWw-L2kn4R7YWMvxP0Lw",
      authDomain: "auth-7b923.firebaseapp.com",
      databaseURL: "https://auth-7b923.firebaseio.com",
      projectId: "auth-7b923",
      storageBucket: "auth-7b923.appspot.com",
      messagingSenderId: "43220690525"
    })
  }

  render() {
    return (
      <View style={{ 'flex': 1 }}>
        <Header title='Auth'/>
        <LoginForm />
      </View>
    );
  }
}

