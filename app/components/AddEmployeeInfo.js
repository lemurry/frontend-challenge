import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {EmployeeStore} from '../data/EmployeeStore.js';
import EventTypes from '../data/EventTypes.js';

export class AddEmployeeInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: {
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
        profileFilledPercentage: 20
      }
    }
  }

  render() {
    const employee = this.state.employee;
    const skills = this.state.employee.skills.map(skill => <div className="employee-form__skill" key={skill.id}>
      {skill.name}
    </div>);

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

          <div className="employee-form__skill-list">
            {skills}
          </div>

          <div className="employee-form__row">
            <select className="employee-form__select">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <div className="employee-form__datepicker">
              Birthday
            </div>
          </div>

          <textarea className="employee-form__textarea" rows="10" cols="45" name="text"></textarea>

        </div>
      </div>
    )
  }
}
