import ActionTypes from './ActionTypes';
import AppDispatcher from '../AppDispatcher';

import axios from 'axios';

const Actions = {
  getWholeState() {
    axios.get(`http://localhost:3000/db`).then(res => {
      AppDispatcher.dispatch({
        type: ActionTypes.GET_WHOLE_STATE,
        res
      });
    })
  },

  createNewEmployee(employee) {
      axios.post(`http://localhost:3000/employeelist`, employee).then(res => {
      const newEmployee = res.data;
          axios.post(`http://localhost:3000/newEmployee`, newEmployee).then(res => {
          AppDispatcher.dispatch({
            type: ActionTypes.CREATE_NEW_EMPLOYEE,
            employee: res.data
          });
        })
      })
  },

  cancelAddingEmployee(employee) {
    debugger;
    // axios.post(`http://localhost:3000/employeelist`).then(res => {
    //   AppDispatcher.dispatch({type: ActionTypes.CANCEL_ADDING_EMPLOYEE, employee});
  },

  addEmployee(employee) {
    debugger;
    // AppDispatcher.dispatch({type: ActionTypes.ADD_EMPLOYEE, employee});
  },

  editEmployee(employee) {
    // debugger;
    axios.put(`http://localhost:3000/employeelist/${employee.id}`, employee).then(res => {
      // debugger;
      let employee = res.data;
      AppDispatcher.dispatch({
        type: ActionTypes.UPDATE_EMPLOYEE,
        employee
      });
    })
  },

  deleteEmployee(id) {
    axios.delete(`http://localhost:3000/employeelist/${id}`).then(res => {
      // debugger;
      AppDispatcher.dispatch({
        type: ActionTypes.DELETE_EMPLOYEE,
        id
      });
    })
  },

  openEmployee(id) {
    // debugger;
    AppDispatcher.dispatch({
      type: ActionTypes.OPEN_EMPLOYEE,
      id
    });
  },

  closeEmployee() {
    AppDispatcher.dispatch({
      type: ActionTypes.CLOSE_EMPLOYEE
    });
  }
};

export default Actions;
