import AppDispatcher from './AppDispatcher.js';
import MicroEvent from 'microevent';

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
      profileFilledPercentage: 100,
      opened: false
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
      profileFilledPercentage: 20,
      opened: true
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
      profileFilledPercentage: 70,
      opened: false
    }
  ],

  openedEmployeeId: null,

  getAll: function() {
    return this.employees
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
    case 'open-employee':
      EmployeeStore.openedEmployeeId = payload.employeeId;
      EmployeeStore.trigger('change');
      break;

  }
  return true;

});
