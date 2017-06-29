import React from 'react';
import {Link} from 'react-router-dom';

export function ViewEmployeeInfo(props) {
  const employee = props.openedEmployee;
  const skills = employee.skills.map(skill => <div className="view-info__skill" key={skill.id}>
    {skill.name}
  </div>);

  const formatedDate = `${employee.dateOfBirth.getDate()}.${employee.dateOfBirth.getMonth()}.${employee.dateOfBirth.getFullYear()}`;

  const deleteEmployee = () => {
    props.onDelete(employee.id);
    props.onClose();
    props.history.push('/');
  }

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

        <div className="buttons-row">
          <Link to={`/info/${employee.id}/edit`} className="buttons-row__button buttons-row__button--green">Edit</Link>
          <div className="buttons-row__button buttons-row__button--red" onClick={deleteEmployee}> Delete  </div>
        </div>
      </div>
    </div>
  )
}
