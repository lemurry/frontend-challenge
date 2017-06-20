import React, {Component} from 'react';
import {Container} from 'flux/utils';

import EmployeeStore from '../data/EmployeeStore.js';

import App from './App.js';

export default class AppContainer extends Component {

  componentWillMount() {
    this.state = Object.values(EmployeeStore.getInitialState());
  }

  static getStores() {
    return [EmployeeStore];
  }

  static calculateState(prevState) {
    return {
      employeeList: EmployeeStore.getState()
    };
  }

  render() {
    const employeeList = this.state;
    return (
      <App employeeList={employeeList}/>
    );
  }
}

const container = Container.create(AppContainer);