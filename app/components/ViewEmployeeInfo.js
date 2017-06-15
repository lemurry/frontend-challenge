import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class ViewEmployeeInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const employee = this.props.employee;
    const skills = employee.skills.map(skill => <div className="view-info__skill" key={skill.id}>
      {skill.name}
    </div>);
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
          ({employee.gender}, {employee.dateOfBirth})
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
  </div>
  )
  }
}
