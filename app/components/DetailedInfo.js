import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {EmployeeStore} from '../data/EmployeeStore.js';
import {CloseButton} from './CloseButton.js';
import {ViewEmployeeInfo} from './ViewEmployeeInfo.js';
import EventTypes from '../data/EventTypes.js';

export class DetailedInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: null
    };

    this.listChanged = this.listChanged.bind(this);
    EmployeeStore.bind(EventTypes.OPENED_EMPLOYEE_CHANGED, this.listChanged);
  }

  listChanged() {
    this.setState({employee: EmployeeStore.getOpenedEmployee()});
  }

  render() {
    const employee = this.state.employee;
    if (employee) {
      const skills = employee.skills.map(skill => <div className="view-info__skill" key={skill.id}>
        {skill.name}
      </div>)
      
      return (
        <div className="detailed-info">
          <CloseButton />

          <ViewEmployeeInfo employee={employee} />
        </div>
      );
    } else {
      return null
    }

  }
}
