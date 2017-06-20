import React, {Component} from 'react';
import {Container} from 'flux/utils';

import {EmployeeStore} from '../data/EmployeeStore.js';

import App from './App.js';

export default class AppContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      employeeList: EmployeeStore.getAllEmployees(),
      openedEmployee: EmployeeStore.getOpenedEmployee()
    };
  }

  render() {
    const openedEmployee = this.state.openedEmployee;
    const employeeList = this.state.employeeList;

    return (<App openedEmployee={openedEmployee} employeeList={employeeList}/>);
  }
}
