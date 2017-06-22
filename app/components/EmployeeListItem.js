import React, {Component} from 'react';
import AppDispatcher from '../data/AppDispatcher.js';
import ActionTypes from '../data/ActionTypes.js';
import EventTypes from '../data/EventTypes.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export function EmployeeListItem(props) {
  const employee = props.employee;
  // debugger;
  const skills = employee.skills.map(skill => <div className="list-item__skill" key={skill.id}>
    {skill.name}
  </div>)
  const className = props.opened
    ? "list-item opened"
    : "list-item";

  const deleteEmployee = () => props.onDelete(employee.id);

  const openEmployee = () => {
    props.history.push(`/${employee.id}/view`);
    props.onOpen(employee.id);
  }

  return (
    <div className="list-item" onClick={openEmployee}>
      <div className="list-item__avatar">
        <img src="http://dummyimage.com/93/85d4e2&text=placeholder"/>
      </div>
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
  );
}
