import React from 'react';
import {Link} from 'react-router-dom';

import {EmployeeStore} from '../data/EmployeeStore.js';

export function ViewEmployeeInfo(props) {
  const employee = props.employee;
  const skills = employee.skills.map(skill => <div className="view-info__skill" key={skill.id}>
    {skill.name}
  </div>);

  const formatedDate = `${employee.dateOfBirth.getDate()}.${employee.dateOfBirth.getMonth()}.${employee.dateOfBirth.getFullYear()}`;

  return (
    <div className="detailed-info-container">
      <div className="left-column">
        <div className="avatar"/>

      </div>

      <div className="view-info">
        <div className="view-info__main-info">
          <div className="view-info__name">
            {employee.firstName}
            {employee.lastName}
          </div>
          <div className="view-info__bio">
            ({employee.gender.name}, {formatedDate})
          </div>
        </div>

        <div className="view-info__status">
          {employee.status}
        </div>

        <div className="view-info__skills-list">
          {skills}
        </div>

        <div className="view-info__description">
          {employee.description}
        </div>
      </div>
      <Link to={`/info/${employee.id}/edit`}>Edit</Link>
    </div>
  )
}
