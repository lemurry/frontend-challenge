import React, {Component} from 'react';
import AppDispatcher from '../data/AppDispatcher.js';
import {EmployeeStore} from '../data/EmployeeStore.js';
import ActionTypes from '../data/ActionTypes.js';
import EventTypes from '../data/EventTypes.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export function EmployeeListItem (props) {
    const employee = props.employee;
    const skills = employee.skills.map(skill => <div className="list-item__skill" key={skill.id}>
      {skill.name}
    </div>)
    const className = (props.employee.id == EmployeeStore.getOpenedEmployeeId())
      ? "list-item opened"
      : "list-item";
    const link = `/${employee.id}/view`;
    return (
      <Link to={link} className={className}>
        <div className="list-item__avatar"></div>
        <div className="list-item__info-container">
          <div className="list-item__name">
            {employee.firstName} {employee.lastName}
          </div>
          <div className="list-item__status">
            {employee.status}
          </div>
          <div className="list-item__skills-list">
            {skills}
          </div>
        </div>
      </Link>
    );
  }
