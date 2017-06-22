import ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';

const Actions = {
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
};

export default Actions;
