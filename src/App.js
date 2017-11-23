import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;