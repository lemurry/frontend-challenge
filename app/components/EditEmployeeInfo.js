import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {EmployeeStore} from '../data/EmployeeStore.js';
import EventTypes from '../data/EventTypes.js';

import AppDatePicker from './DatePicker.js'
import Select from './Select.js'
import AppAutoComplete from './AppAutoComplete.js'

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

  render() {
    const styles = {

    }

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

            <input className="employee-form__input employee-form__input--short" type="text" placeholder="First name"/>

            <input className="employee-form__input employee-form__input--short" type="text" placeholder="Last name"/>

          </div>
          <input className="employee-form__input" type="text" placeholder="Some text"/>


            <AppAutoComplete skills={employee.skills}/>


          <div className="employee-form__row">

            <Select value={this.state.employee.gender} onChange={this.onSelectChanged}/>

            <AppDatePicker date={this.state.employee.dateOfBirth} onChange={this.onDateChanged}/>

          </div>

          <textarea className="employee-form__textarea" rows="7" cols="45" name="text" placeholder="Add some description"/>
        </div>
      </div>
    )
  }
}
