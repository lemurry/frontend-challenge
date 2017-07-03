import AppDispatcher from '../AppDispatcher.js';
import {
  ReduceStore
} from 'flux/utils';
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
        return state.set('openedEmployeeId', action.id);

      case ActionTypes.CLOSE_EMPLOYEE:
        return state.set('openedEmployeeId', null);

      default:
        return state;
    }
  }
}
export default new DetailedInfoStore();
