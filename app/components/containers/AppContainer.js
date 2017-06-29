import React from 'react';
import {Container} from 'flux/utils';
import Immutable from 'immutable';

import App from '../App.js';
import EmployeeStore from './../../data/stores/EmployeeStore.js';
import DetailedInfoStore from './../../data/stores/DetailedInfoStore.js';
import ActionCreator from './../../data/actions/ActionCreator.js';


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
