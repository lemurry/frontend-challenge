import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {EmployeeStore} from '../data/EmployeeStore.js';
import EventTypes from '../data/EventTypes.js';

export function AddEmployeeInfo(props) {
  const employee = props.employee;
  const skills = employee.skills.map(skill => <div className="employee-form__skill" key={skill.id}> {skill.name} </div>);

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

          <div className="employee-form__input employee-form__input--short">
            <input className="employee-form__embeded-input" type="text" placeholder="First name"/>
          </div>

          <div className="employee-form__input employee-form__input--short">
            <input className="employee-form__embeded-input" type="text" placeholder="Last name"/>
          </div>

        </div>
        <div className="employee-form__input">
          <input className="employee-form__embeded-input" type="text" placeholder="Some text"/>
        </div>

        <div className="employee-form__skill-list">
          {skills}
          <input className="employee-form__embeded-input" type="text" placeholder="start typing skill..."/>
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

        <div className="employee-form__input">
          <textarea className="employee-form__textarea" rows="7" cols="45" name="text" placeholder="Add some description"/>
        </div>
      </div>
    </div>
  )
}
