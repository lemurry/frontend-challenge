import React, {Component} from 'react';
import AppDispatcher from '../data/AppDispatcher.js';
import {EmployeeStore} from '../data/EmployeeStore.js';
import ActionTypes from '../data/ActionTypes.js';
import EventTypes from '../data/EventTypes.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export class EmployeeListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: props.employee,
      isOpened: false
    };

    this.openEmployeeInfo = this.openEmployeeInfo.bind(this);
    this.onOpenedEmployeeChanged = this.onOpenedEmployeeChanged.bind(this);
    EmployeeStore.bind(EventTypes.OPENED_EMPLOYEE_CHANGED, this.onOpenedEmployeeChanged);
  }

  openEmployeeInfo() {
    AppDispatcher.dispatch({
      eventName: ActionTypes.OPEN_EMPLOYEE,
      employeeId: this.state.employee.id
    });
  }

  onOpenedEmployeeChanged() {
    let isOpened = EmployeeStore.getOpenedEmployeeId() == this.state.employee.id;
    this.setState({isOpened: isOpened})
  }

  render() {
    const employee = this.state.employee;
    const openedEmployeeId = EmployeeStore.getOpenedEmployeeId();
    const skills = employee.skills.map(skill => <div className="list-item__skill" key={skill.id}>
      {skill.name}
    </div>)

    const className = this.state.isOpened ? "list-item opened" : "list-item";
    // debugger;
    const link = `/${employee.id}/view`;

    return (
      <Link to={link}>
      <div onClick={this.openEmployeeInfo} className={className}>
        <div className="list-item__avatar"></div>
        <div className="list-item__info-container">
          <div className="list-item__name">
            {employee.firstName}
            {employee.lastName}
          </div>
          <div className="list-item__status">
            {employee.status}
          </div>
          <div className="list-item__skills-list">
            {skills}
          </div>
        </div>
      </div>
      </Link>
    );
  }
}
