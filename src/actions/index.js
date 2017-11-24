import firebase from 'firebase';
import { Actions }  from 'react-native-router-flux';
 
// libary 
export const selectLibrary = (libraryId) => {
  return {
    type: 'SELECT_LIBRARY',
    payload: libraryId
  };
};

// auth
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
  Actions.main();
};

const loginUserFailure = (dispatch) => {
  dispatch({ type: 'LOGIN_FAILURE' });
};

// emmployee

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: 'EMPLOYEE_UPDATE',
    payload: {prop, value}
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`).push({ name, phone, shift })
      .then(() => {
        dispatch({ type: 'EMPLOYEE_CREATE' });
        Actions.employeeList({ type: 'reset' });
      });
  };
};

export const employeeFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: 'EMPLOYEE_FETCH_SUCCESS', payload: snapshot.val() });
      });
  };
};
