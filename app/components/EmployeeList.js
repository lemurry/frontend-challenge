import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {EmployeeListItem} from './EmployeeListItem.js';
import {EmployeeStore} from '../data/EmployeeStore.js';
import EventTypes from '../data/EventTypes.js';

export class EmployeeList extends Component {
  constructor(props) {
    super(props);

    let employees = EmployeeStore.getAllEmployees();
    let openedEmployeeId = EmployeeStore.getOpenedEmployeeId();

    this.state = {
      employees: employees,
      openedEmployee: openedEmployeeId
    };

    EmployeeStore.bind(EventTypes.OPENED_EMPLOYEE_CHANGED, this.listChanged);
  }


  listChanged() {
    console.log('Opened employee: ' + EmployeeStore.openedEmployeeId)
  };

  render() {

    const rows = this.state.employees.sort((a, b) => {
      return a.id - b.id;
    }).map((e) => {
      return <EmployeeListItem employee={e} key={e.id}/>;
    });

    return (
      <div className="list">
        <div className="add-button"/>
        <div>
          {rows}
        </div>
      </div>
    );
  }
}
