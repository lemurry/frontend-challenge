import React from 'react';
import { Container } from 'flux/utils';
import Immutable from 'immutable';

import EmployeeStore from '../data/EmployeeStore.js';
import ActionCreator from '../data/ActionCreator.js';

import App from './App.js';

function getStores() {
  return [EmployeeStore];
}

function getState() {
  return {
    employeeList: Object.values(EmployeeStore.getState().toJS()),

    onAdd: ActionCreator.addEmployee,
    onDelete: ActionCreator.deleteEmployee,
  };
}
export default Container.createFunctional(App, getStores, getState);
