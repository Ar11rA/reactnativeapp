import firebase from 'firebase';

export const selectLibrary = (libraryId) => {
  return {
    type: 'SELECT_LIBRARY',
    payload: libraryId
  };
};

export const emailChanged = (text) => {
  return {
    type: 'EMAIL_CHANGED',
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: 'PASSWORD_CHANGED',
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return ((dispatch) => {
    dispatch({ type: 'LOGIN_START' });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((user) => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFailure(dispatch));
      });
  });
};   

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: 'LOGIN_SUCCESS', payload: user });
};

const loginUserFailure = (dispatch) => {
  dispatch({ type: 'LOGIN_FAILURE' });
};