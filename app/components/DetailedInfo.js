import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class DetailedInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: {
        id: 1,
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
          }, {
            id: 2,
            name: "node.js"
          }, {
            id: 3,
            name: "scss"
          }, {
            id: 4,
            name: "html"
          }
        ],
        gender: "Female",
        dateOfBirth: "28.08.1990",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        profileFilledPercentage: 20,
        opened: true
      }
    }
  }

  render() {
    const employee = this.state.employee;
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
  }
}
