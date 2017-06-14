import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {EmployeeStore} from '../data/EmployeeStore.js';

export class DetailedInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: null
    };

    this.listChanged = this.listChanged.bind(this);
    EmployeeStore.bind('change', this.listChanged);
  }

  listChanged() {
    this.setState({employee: EmployeeStore.getOpenedEmployee()});
  }

  render() {
    const employee = this.state.employee;
    if (employee) {
      const skills = employee.skills.map(skill => <div className="info-view__skill" key={skill.id}>
        {skill.name}
      </div>)

      return (
        <div className="detailed-info">
          <div className="close-button"/>
          <div className="left-column">
            <div className="avatar"/>

          </div>

          <div className="info-view">
            <div className="info-view__main-info">
              <div className="info-view__name">
                {employee.firstName}
                {employee.lastName}
              </div>
              <div className="info-view__bio">
                ({employee.gender}, {employee.dateOfBirth})
              </div>
            </div>

            <div className="info-view__status">
              {employee.status}
            </div>

            <div className="info-view__skills-list">
              {skills}
            </div>

            <div className="info-view__description">
              {employee.description}
            </div>
          </div>
        </div>
      );
    } else {
      return null
    }

  }
}
