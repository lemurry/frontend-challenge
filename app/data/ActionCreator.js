import ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';

import axios from 'axios';

const Actions = {
  getInitialState() {
    AppDispatcher.dispatch({
      type: ActionTypes.GET_INITIAL_STATE
    });
  },

  getAllEmployee() {
    AppDispatcher.dispatch({
      type: ActionTypes.GET_ALL_EMPLOYEE
    });
  },

  addEmployee(employee) {
    AppDispatcher.dispatch({
      type: ActionTypes.ADD_EMPLOYEE,
      employee,
    });
  },

  deleteEmployee(id) {
    AppDispatcher.dispatch({
      type: ActionTypes.DELETE_EMPLOYEE,
      id,
    });
  },

  openEmployee(id) {
    AppDispatcher.dispatch({
      type: ActionTypes.OPEN_EMPLOYEE,
      id,
    });
  },

  closeEmployee() {
    AppDispatcher.dispatch({
      type: ActionTypes.CLOSE_EMPLOYEE
    });
  },
};

export default Actions;
