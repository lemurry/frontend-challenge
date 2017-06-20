import AppDispatcher from './AppDispatcher.js';
import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';

import ActionTypes from './ActionTypes.js';
import EventTypes from './EventTypes.js';
import Employee from './Employee.js';

class EmployeeStore extends ReduceStore{
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap([
      [
        0,
        new Employee({
          id: 0,
          firstName: "F.Name",
          lastName: "L.Name",
          status: "some text",
          skills: [],
          gender: 1,
          dateOfBirth: new Date(),
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          profileFilledPercentage: 100
        })
      ], [
        1,
        new Employee({
          id: 1,
          firstName: "F.Name",
          lastName: "L.Name",
          status: "some text",
          skills: [],
          gender: 1,
          dateOfBirth: new Date(),
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          profileFilledPercentage: 20
        })
      ], [
        2,
        new Employee({
          id: 2,
          firstName: "F.Name",
          lastName: "L.Name",
          status: "some text",
          skills: [],
          gender: 1,
          dateOfBirth: new Date(),
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          profileFilledPercentage: 70
        })
      ]
    ]).toJS()
  }

  reduce(state, action) {

    switch (action.type) {
      case ActionTypes.OPEN_EMPLOYEE:
        return state.set(openedEmployeeId = action.id);

      case ActionTypes.CLOSE_EMPLOYEE:
        return state.set(openedEmployeeId = null);

      default:
        return state;
    }
  }
}
export default new EmployeeStore();
