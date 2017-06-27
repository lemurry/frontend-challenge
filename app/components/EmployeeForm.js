import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {EmployeeStore} from '../data/EmployeeStore.js';
import Employee from '../data/Employee.js';

import AppAutoComplete from './AppAutoComplete.js'
import AppDatePicker from './DatePicker.js'
import Select from './Select.js'

export default class EmployeeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: this.props.employee
    };

    this.onSelectChanged = this.onSelectChanged.bind(this);
    this.onDateChanged = this.onDateChanged.bind(this);
    this.onAddSkill = this.onAddSkill.bind(this);
    this.onDeleteSkill = this.onDeleteSkill.bind(this);
    this.onFirstNameChanged = this.onFirstNameChanged.bind(this);
    this.onLastNameChanged = this.onLastNameChanged.bind(this);
    this.onStatusChanged = this.onStatusChanged.bind(this);
    this.onDescriptionChanged = this.onDescriptionChanged.bind(this);

  }

  onSelectChanged(value) {
    let employee = this.state.employee;
    employee.gender = value;
    this.setState({employee: employee});}

  onDateChanged(date) {
    let employee = this.state.employee;
    employee.dateOfBirth = new Date(value);
    this.setState({employee: employee});}

  onAddSkill(key) {
    let employee = this.state.employee;
    employee.skills.push(key);
    this.setState({employee: employee});}

  onDeleteSkill(key) {}

  onFirstNameChanged(value) {
    let employee = this.state.employee;
    
    this.setState({employee: employee});
  }

  onLastNameChanged(value) {
    let employee = this.state.employee;
    employee.lastName = value;
    this.setState({employee: employee});
  }

  onStatusChanged(value) {
    let employee = this.state.employee;
    employee.status = value;
    this.setState({employee: employee});
  }

  onDescriptionChanged(value) {
    let employee = this.state.employee;
    employee.description = value;
    this.setState({employee: employee});
  }

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
            <input className="employee-form__input employee-form__input--short" type="text" placeholder="First name" value={employee.firstName} onChange={this.onFirstNameChanged}/>
            <input className="employee-form__input employee-form__input--short" type="text" placeholder="Last name" value={employee.lastName} onChange={this.onLastNameChanged}/>
          </div>
          <input className="employee-form__input" type="text" placeholder="Some text" value={employee.status} onChange={this.onStatusChanged}/>

          <AppAutoComplete skills={employee.skills} onAddSkill={this.onAddSkill} onDeleteSkill={this.onDeleteSkill}/>

          <div className="employee-form__row">

            <Select value={this.state.employee.gender} onChange={this.onSelectChanged}/>

            <AppDatePicker date={this.state.employee.dateOfBirth} onChange={this.onDateChanged}/>

          </div>

          <textarea className="employee-form__textarea" rows="7" cols="45" name="text" placeholder="Add some description"  value={employee.description}  onChange={this.onDescriptionChanged}/>
        </div>
      </div>
    )
  }
}
