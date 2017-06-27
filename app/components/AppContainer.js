import React from 'react';
import {
  Container
} from 'flux/utils';
import Immutable from 'immutable';

import EmployeeStore from '../data/EmployeeStore.js';
import ActionCreator from '../data/ActionCreator.js';

import App from './App.js';

function getStores() {
  return [EmployeeStore];
}

function getState() {
  let store = EmployeeStore.getState().toJS();
  // debugger;

  let openedEmployee;
  if (Object.getOwnPropertyNames(store).length > 0 && store.openedEmployeeId != null) {
    // debugger;
    let openedEmployeeId = store.openedEmployeeId;
    openedEmployee = store.employeeList.find(e => e.id == openedEmployeeId);
  }
  else {
    openedEmployee = null;
  }

  return {
    store: store,
    openedEmployee: openedEmployee,


    onAdd: ActionCreator.addEmployee,
    onGetWholeState: ActionCreator.getWholeState,
    onDelete: ActionCreator.deleteEmployee,
    onOpen: ActionCreator.openEmployee,
    onClose: ActionCreator.closeEmployee
  };
}
export default Container.createFunctional(App, getStores, getState);
