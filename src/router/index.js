import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from '../components/LoginFormRedux';
import EmployeeList from '../components/EmployeeList';
import EmployeeCreationForm from '../components/EmployeeCreationForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 75 }}>
      <Scene key="auth" initial>
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>
      <Scene key="main">
        <Scene key="employeeList" component={EmployeeList} title="Employees" rightTitle="Add" onRight={ () => Actions.employeeCreate() } initial/>
        <Scene key="employeeCreate" component={EmployeeCreationForm} title="Manage Employee" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;