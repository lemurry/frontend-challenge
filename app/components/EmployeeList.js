import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {EmployeeListItem} from './EmployeeListItem.js';

export class EmployeeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [
        {
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
          profileFilledPercentage: 100,
          opened: false
        }, {
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
          gender: "female",
          dateOfBirth: "28.08.1990",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          profileFilledPercentage: 20,
          opened: true
        }, {
          id: 2,
          firstName: "F.Name",
          lastName: "L.Name",
          status: "some text",
          skills: [
            {
              id: 0,
              name: "angular.js"
            }
          ],
          gender: "female",
          dateOfBirth: "28.08.1990",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          profileFilledPercentage: 70,
          opened: false
        }
      ]
    };
  }

  render() {

    const rows = this.state.employees.sort((a, b) => {
      return a.id - b.id;
    }).map((e) => {
      return <EmployeeListItem employee={e} key={e.id}/>;
    });

    return (
      <div className="list">
        <div className="add-button"/>
        <div>
          {rows}
        </div>
      </div>
    );
  }
}
