import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Header from './components/Header';
import LibraryList from './components/LibraryList';
import firebase from 'firebase';
class App extends Component {

  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyBHrU8ZygukpXwmWw-L2kn4R7YWMvxP0Lw',
      authDomain: 'auth-7b923.firebaseapp.com',
      databaseURL: 'https://auth-7b923.firebaseio.com',
      projectId: 'auth-7b923',
      storageBucket: 'auth-7b923.appspot.com',
      messagingSenderId: '43220690525'
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header title='Tech Stack'/>
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

export default App;