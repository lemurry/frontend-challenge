import AppDispatcher from './AppDispatcher.js';
import {
  ReduceStore
} from 'flux/utils';
import Immutable from 'immutable';

import Counter from './Counter.js';

import ActionTypes from './ActionTypes.js';
import EventTypes from './EventTypes.js';
import Employee from './Employee.js';

class EmployeeStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return Immutable.fromJS({
      employeeList: [{
          id: 0,
          firstName: "F.Name 0",
          lastName: "L.Name 0",
          status: "some text",
          skills: [],
          gender: 1,
          dateOfBirth: '',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          profileFilledPercentage: 100
        },
        {
          id: 1,
          firstName: "F.Name 1",
          lastName: "L.Name 1",
          status: "some text",
          skills: [],
          gender: 1,
          dateOfBirth: '',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          profileFilledPercentage: 20
        },
        {
          id: 2,
          firstName: "F.Name 2",
          lastName: "L.Name 2",
          status: "some text",
          skills: [],
          gender: 1,
          dateOfBirth: '',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          profileFilledPercentage: 70
        }
      ],
      openedEmployeeId: null
    }).toOrderedMap();
  }

  reduce(state, action) {

    switch (action.type) {
      case ActionTypes.ADD_EMPLOYEE:
        let id = Counter.increment();
        return state.update('employeeList', list => list.push(Immutable.fromJS({
          id: id,
          firstName: "New " + id,
          lastName: "Item " + id,
          status: "some text",
          skills: [],
          gender: 1,
          dateOfBirth: '',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          profileFilledPercentage: 20
        })));

      case ActionTypes.DELETE_EMPLOYEE:
        return state.update('employeeList', (list) => {
          let index = list.findIndex(e => e.get('id') == action.id);
          return list.delete(index)
        });

      case ActionTypes.OPEN_EMPLOYEE:
        let employeeId = action.id;
        if (typeof employeeId != 'undefined') {
          let index = state.get('employeeList').findIndex(e => e.get('id') == action.id);
          if (index != -1) {
            return state.set('openedEmployeeId', action.id);
          }
        }
        return state;

      case ActionTypes.CLOSE_EMPLOYEE:
        return state.set('openedEmployeeId', null);

      default:
        return state;
    }
  }
}
export default new EmployeeStore();
