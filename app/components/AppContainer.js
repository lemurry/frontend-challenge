import React from 'react';
import {Container} from 'flux/utils';
import Immutable from 'immutable';

import EmployeeStore from '../data/EmployeeStore.js';
import ActionCreator from '../data/ActionCreator.js';

import App from './App.js';

function getStores() {
  return [EmployeeStore];
}

function getState() {
  let state = EmployeeStore.getState();
  let employeeList = state.get('employeeList').toJS();
  let openedEmployeeId = state.get('openedEmployeeId');
  // let openedEmployee = employeeList.find(e =>  e.get('id') == openedEmployeeId).toJS();
  let openedEmployee = employeeList.find(e => e.id == openedEmployeeId);
  // debugger;
  return {
    employeeList: employeeList,
    openedEmployee: openedEmployee,

    onAdd: ActionCreator.addEmployee,
    onDelete: ActionCreator.deleteEmployee,
    onOpen: ActionCreator.openEmployee,
    onClose: ActionCreator.closeEmployee
  };
}
export default Container.createFunctional(App, getStores, getState);
