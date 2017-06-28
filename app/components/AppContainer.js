import React from 'react';
import {Container} from 'flux/utils';
import Immutable from 'immutable';

import EmployeeStore from '../data/EmployeeStore.js';
import DetailedInfoStore from '../data/DetailedInfoStore.js';
import ActionCreator from '../data/ActionCreator.js';

import App from './App.js';

function getStores() {
  return [EmployeeStore, DetailedInfoStore];
}

function getState() {
  let store = EmployeeStore.getState().toJS();
  let detailedInfo = DetailedInfoStore.getState().toJS();
  let openedEmployeeId = detailedInfo.openedEmployeeId;

  let openedEmployee;
  if (Object.getOwnPropertyNames(store).length > 0){
    openedEmployee = store.employeeList.find(e => e.id == openedEmployeeId) || null;
  };
  // let openedEmployee;
  // if (Object.getOwnPropertyNames(store).length > 0 && openedEmployeeId != null) {
  //   openedEmployee = store.employeeList.find(e => e.id == openedEmployeeId);
  // } else {
  //   openedEmployee = null;
  // }

  return {
    store: store,
    openedEmployee: openedEmployee,

    onGetWholeState: ActionCreator.getWholeState,
    onAdd: ActionCreator.addEmployee,
    onDelete: ActionCreator.deleteEmployee,
    onOpen: ActionCreator.openEmployee,
    onClose: ActionCreator.closeEmployee
  };
}
export default Container.createFunctional(App, getStores, getState);
