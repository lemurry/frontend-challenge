import React, {Component} from 'react';
import AppDispatcher from '../data/AppDispatcher.js';
import ActionTypes from '../data/ActionTypes.js';
import EventTypes from '../data/EventTypes.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export function EmployeeListItem(props) {
  const employee = props.employee;
  const skills = employee.skills.map(skill => <div className="list-item__skill" key={skill.id}>
    {skill.id}
  </div>);
  // const className = props.opened
  //   ? "list-item opened"
  //   : "list-item";

  const deleteEmployee = () => props.onDelete(employee.id);

  const openEmployee = () => {
    props.history.push(`/info/${employee.id}/view`);
    props.onOpen(employee.id);
  }

  const countProfileFilledPercentage = () => {
    let res = 0;
    if (employee.firstName) res += 5;
    if (employee.lastName) res += 5;
    if (employee.photo) res += 20;
    if (employee.gender) res += 5;
    if (employee.dateOfBirth) res += 5;
    if (employee.status) res += 10;
    if (employee.description) res += 10;
    employee.skills.forEach(s => res += 5);
    return res
  }

  const profileFilledStyle = () => {
    let profileFilledPercentage = countProfileFilledPercentage();
    //hue of red = 0, hue of green = 120
    let hue = profileFilledPercentage / 100 * (120 - 0);
    let lightColor = `hsl(${hue}, 100%, 75%)`;
    let darkColor = `hsl(${hue}, 100%, 30%)`;
    let gradient = `linear-gradient(to top, ${lightColor}, ${darkColor})`;
    return {background: gradient, top: `calc(100% - ${profileFilledPercentage}%)`}
  }

  return (
    <div className="list-item" onClick={openEmployee}>
      <div className="list-item__profile-filled" style={profileFilledStyle()}/>
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
  );
}
