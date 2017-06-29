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

  let openedEmployee, newEmployee;
  if (Object.getOwnPropertyNames(store).length > 0){
    openedEmployee = store.employeeList.find(e => e.id == openedEmployeeId) || null;

    let newEmployeeId = store.newEmployeeId;
    newEmployee = (newEmployeeId != null) ? store.employeeList.find(e => e.id == newEmployeeId) : null;
  };

  return {
    store: store,
    openedEmployee: openedEmployee,
    newEmployee: newEmployee,

    onGetWholeState: ActionCreator.getWholeState,
    onAdd: ActionCreator.addEmployee,
    onEdit: ActionCreator.editEmployee,
    onDelete: ActionCreator.deleteEmployee,
    onOpen: ActionCreator.openEmployee,
    onClose: ActionCreator.closeEmployee,

    onStartAdding: ActionCreator.startAddingEmployee,
    onCancelAdding: ActionCreator.cancelAddingEmployee,
  };
}
export default Container.createFunctional(App, getStores, getState);
