import ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';

import axios from 'axios';

const Actions = {
  getWholeState() {
    // debugger;
    axios.get(`http://localhost:3000/db`)
      .then(res => {
        // debugger;
        AppDispatcher.dispatch({
          type: ActionTypes.GET_WHOLE_STATE,
          res
        });
          // debugger;
      })
  },

  getAllEmployees() {
    axios.get(`http://localhost:3000/employees`)
      .then(res => {
        AppDispatcher.dispatch({
          type: ActionTypes.GET_ALL_EMPLOYEES,
          res
        });
      })
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
    // debugger;
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
