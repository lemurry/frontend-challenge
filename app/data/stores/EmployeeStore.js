import AppDispatcher from '../AppDispatcher.js';
import {ReduceStore} from 'flux/utils';
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
        let employeeList = action.res.data.employeeList;
        let allSkills = action.res.data.skills;
        let genders = action.res.data.gender;
        employeeList = employeeList.map(employee => {
          let filledSkills = employee.skills.map(skill => {
            return allSkills[skill]
          });
          employee.gender = genders[employee.gender];
          employee.skills = filledSkills;
          employee.dateOfBirth = new Date(employee.dateOfBirth);
          return employee
        });

        let newState = Immutable.fromJS(action.res.data).toOrderedMap();
        return newState;

      case ActionTypes.GET_ALL_EMPLOYEES:
        return state.get('employeeList');

      case ActionTypes.ADD_EMPLOYEE:
        // let id = Counter.increment();
        // return state.update('employeeList', list => list.push(Immutable.fromJS(new Employee({
        //   id: id,
        //   firstName: "New " + id,
        //   lastName: "Item " + id,
        //   status: "some text",
        //   skills: [],
        //   gender: 1,
        //   dateOfBirth: '',
        //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        //   profileFilledPercentage: 20
        // }))));

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
