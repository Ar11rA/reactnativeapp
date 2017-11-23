import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from '../components/LoginFormRedux';
import EmployeeList from '../components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 75 }}>
      <Scene key="auth" initial>
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>
      <Scene key="main">
        <Scene key="employeeList" component={EmployeeList} title="Employees"  rightTitle="Add" onRight={ () => console.log('add') } initial/>
      </Scene>
    </Router>
  );
};

export default RouterComponent;