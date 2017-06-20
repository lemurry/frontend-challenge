import ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';

const Actions = {
  addEmployee(text) {
    AppDispatcher.dispatch({
      type: ActionTypes.ADD_EMPLOYEE,
      text,
    });
  },

  deleteTodo(id) {
    AppDispatcher.dispatch({
      type: ActionTypes.DELETE_EMPLOYEE,
      id,
    });
  },
};

export default Actions;
