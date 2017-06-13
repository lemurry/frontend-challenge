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
                skills: ["angular.js", "react"],
                gender: "female",
                birthday: "",
                description: "",
                profileFilledPercentage: 100
              },
                {
                  id: 1,
                  firstName: "F.Name",
                  lastName: "L.Name",
                  status: "some text",
                  skills: ["angular.js", "react"],
                  gender: "female",
                  birthday: "",
                  description: "",
                  profileFilledPercentage: 20
                },
                  {
                    id: 2,
                    firstName: "F.Name",
                    lastName: "L.Name",
                    status: "some text",
                    skills: ["angular.js"],
                    gender: "female",
                    birthday: "",
                    description: "",
                    profileFilledPercentage: 70
                  },
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
            <div className="page">
                <div className="list">
                  {rows}
                </div>
                <div className="detailed-info-area">
                </div>
            </div>
        );
    }
}
