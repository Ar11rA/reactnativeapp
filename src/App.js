/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import AlbumList from './components/AlbumList';
import Button from './components/Button';
import Spinner from './components/Spinner';
import firebase from 'firebase';

export default class App extends Component {
  
  state = {
    loggedIn: null
  }

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyBHrU8ZygukpXwmWw-L2kn4R7YWMvxP0Lw",
      authDomain: "auth-7b923.firebaseapp.com",
      databaseURL: "https://auth-7b923.firebaseio.com",
      projectId: "auth-7b923",
      storageBucket: "auth-7b923.appspot.com",
      messagingSenderId: "43220690525"
    });

    firebase.auth().onAuthStateChanged((user) => {
      user ? this.setState({ loggedIn: true }) : this.setState({ loggedIn: false });
    });
  }

  onLogOut() {
    firebase.auth().signOut()
  }

  render() {
    switch (this.state.loggedIn) {
      case true:
        return (
        <ScrollView>
          <Header title='Albums'/>  
          <AlbumList onLogOut={() => this.onLogOut()}/>
        </ScrollView>
        );
      break;
      case false:
        return (
        <View>
          <Header title='Auth'/>
          <LoginForm />
        </View>
        );
      break;
      default:
        return <Spinner /> 
    }
  }
}

