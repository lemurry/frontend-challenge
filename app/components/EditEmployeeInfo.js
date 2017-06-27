import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {EmployeeStore} from '../data/EmployeeStore.js';
import EventTypes from '../data/EventTypes.js';

import AppAutoComplete from './AppAutoComplete.js'
import AppDatePicker from './DatePicker.js'
import Select from './Select.js'

export default class EditEmployeeInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: this.props.openedEmployee
    };

    this.onSelectChanged = this.onSelectChanged.bind(this);
    this.onDateChanged = this.onDateChanged.bind(this);
  }

  onSelectChanged(value) {}

  onDateChanged(date) {}

  onAddSkill(key) {}

  onDeleteSkill(key) {}

  render() {
    const employee = this.state.employee;

    return (
      <div className="detailed-info-container">
        <div className="left-column">
          <div className="avatar"/>
          <div className="filled-profile">
            Filled profile: {employee.profileFilledPercentage}%
          </div>
        </div>

        <div className="employee-form">
          <div className="employee-form__row employee-form__row--full">
            <input className="employee-form__input employee-form__input--short" type="text" placeholder="First name" value={employee.firstName}/>
            <input className="employee-form__input employee-form__input--short" type="text" placeholder="Last name" value={employee.lastName}/>
          </div>
          <input className="employee-form__input" type="text" placeholder="Some text" value={employee.status}/>

          <AppAutoComplete skills={employee.skills} onAddSkill={this.onAddSkill} onDeleteSkill={this.onDeleteSkill}/>

          <div className="employee-form__row">

            <Select value={this.state.employee.gender} onChange={this.onSelectChanged}/>

            <AppDatePicker date={this.state.employee.dateOfBirth} onChange={this.onDateChanged}/>

          </div>

          <textarea className="employee-form__textarea" rows="7" cols="45" name="text" placeholder="Add some description"  value={employee.description}/>
        </div>
      </div>
    )
  }
}
