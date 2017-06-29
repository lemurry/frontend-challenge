import AppDispatcher from '../AppDispatcher.js';
import {
  ReduceStore
} from 'flux/utils';
import Immutable from 'immutable';

import ActionTypes from '../actions/ActionTypes.js';
import Employee from '../classes/Employee.js';

class EmployeeStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {

    switch (action.type) {

      case ActionTypes.GET_WHOLE_STATE:
        let newState = action.res.data;
        let skillList = action.res.data.skills;
        let genders = action.res.data.gender;
        newState.employeeList = action.res.data.employeeList.map(employee => (new Employee()).fromRaw(employee, skillList, genders));
        return Immutable.fromJS(newState).toOrderedMap();

      case ActionTypes.START_ADDING_EMPLOYEE:
        return state.set('newEmployeeId', action.id)

      case ActionTypes.ADD_EMPLOYEE:
        break;

      case ActionTypes.UPDATE_EMPLOYEE:
        let employee = action.employee;
        let allSkills = state.get('skills').toJS();
        let gender = state.get('gender').toJS();
        return state.update('employeeList', (list) => {
          let index = list.findIndex(e => e.id == employee.id);
          return list.update(index, empl => (new Employee()).fromRaw(employee, allSkills, gender));
        });

      case ActionTypes.DELETE_EMPLOYEE:
        return state.update('employeeList', (list) => {
          let index = list.findIndex(e => e.get('id') == action.id);
          return list.delete(index)
        });

        // case ActionTypes.OPEN_EMPLOYEE:
        //   // debugger;
        //   let employeeId = action.id;
        //   if (typeof employeeId != 'undefined') {
        //     let index = state.get('employeeList').findIndex(e => e.get('id') == action.id);
        //     if (index != -1) {
        //       return state.set('openedEmployeeId', action.id);
        //     }
        //   }
        //   return state;
        //
        // case ActionTypes.CLOSE_EMPLOYEE:
        //   return state.set('openedEmployeeId', null);

      default:
        return state;
    }
  }
}
export default new EmployeeStore();
