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

        if (Object.getOwnPropertyNames(newState.newEmployee).length > 0) {
          newState.newEmployee = (new Employee()).fromRaw(action.res.data.newEmployee, skillList, genders);
        }
        return Immutable.fromJS(newState).toOrderedMap();

      case ActionTypes.CREATE_NEW_EMPLOYEE:
        return state.set('newEmployee', (new Employee()).fromRaw(action.employee))

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
          let index = list.findIndex(e => e.id == action.id);
          return list.delete(index)
        });

      default:
        return state;
    }
  }
}
export default new EmployeeStore();
