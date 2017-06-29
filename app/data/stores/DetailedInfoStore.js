import AppDispatcher from '../AppDispatcher.js';
import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';

import ActionTypes from '../actions/ActionTypes.js';

class DetailedInfoStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {

    switch (action.type) {

      case ActionTypes.OPEN_EMPLOYEE:
        // debugger;
        return state.set('openedEmployeeId', action.id);
        // let employeeId = action.id;
        // if (typeof employeeId != 'undefined') {
        //   let index = state.get('employeeList').findIndex(e => e.get('id') == action.id);
        //   if (index != -1) {
        //     return state.set('openedEmployeeId', action.id);
        //   }
        // }
        // return state;

      case ActionTypes.CLOSE_EMPLOYEE:
        return state.set('openedEmployeeId', null);

      default:
        return state;
    }
  }
}
export default new DetailedInfoStore();
