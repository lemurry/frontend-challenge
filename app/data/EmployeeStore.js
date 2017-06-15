import AppDispatcher from './AppDispatcher.js';
import MicroEvent from 'microevent';
import ActionTypes from './ActionTypes.js';
import EventTypes from './EventTypes.js';

export var EmployeeStore = {
  employees: [
    {
      id: 0,
      firstName: "F.Name",
      lastName: "L.Name",
      status: "some text",
      skills: [
        {
          id: 0,
          name: "angular.js"
        }, {
          id: 1,
          name: "react"
        }
      ],
      gender: "Female",
      dateOfBirth: "28.08.1990",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileFilledPercentage: 100
    }, {
      id: 1,
      firstName: "F.Name",
      lastName: "L.Name",
      status: "some text",
      skills: [
        {
          id: 0,
          name: "angular.js"
        }, {
          id: 1,
          name: "react"
        }, {
          id: 2,
          name: "node.js"
        }, {
          id: 3,
          name: "scss"
        }, {
          id: 4,
          name: "html"
        }
      ],
      gender: "Female",
      dateOfBirth: "28.08.1990",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileFilledPercentage: 20
    }, {
      id: 2,
      firstName: "F.Name",
      lastName: "L.Name",
      status: "some text",
      skills: [
        {
          id: 0,
          name: "angular.js"
        }
      ],
      gender: "Female",
      dateOfBirth: "28.08.1990",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileFilledPercentage: 70
    }
  ],

  openedEmployeeId: 1,

  getAllEmployees: function() {
    return this.employees;
  },

    getEmployeeById: function(id) {
      return this.employees.find(e => e.id == id);
    },

  getOpenedEmployeeId: function() {
    return this.openedEmployeeId;
  },

  getOpenedEmployee: function() {
    return this.employees.find(e => e.id == this.openedEmployeeId);
  }
}

MicroEvent.mixin(EmployeeStore);

AppDispatcher.register(function(payload) {

  switch (payload.eventName) {
    case ActionTypes.OPEN_EMPLOYEE:
      EmployeeStore.openedEmployeeId = payload.employeeId;
      EmployeeStore.trigger(EventTypes.OPENED_EMPLOYEE_CHANGED);
      break;

    case ActionTypes.CLOSE_EMPLOYEE:
      EmployeeStore.openedEmployeeId = null;
      EmployeeStore.trigger(EventTypes.OPENED_EMPLOYEE_CHANGED);
      break;

  }
  return true;

});
