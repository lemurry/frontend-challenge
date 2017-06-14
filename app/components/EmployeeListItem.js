import React, { Component } from 'react';

export class EmployeeListItem extends Component {
    constructor(props){
        super(props);
        this.state = {employee: props.employee};

    }

    render() {
        const employee = this.state.employee;
        const skills = employee.skills.map(skill => <div className="list-item__skill" key={skill.id}> {skill.name} </div>)

        return (
                <div className={employee.opened ? "list-item opened" : "list-item"}>
                    <div className="list-item__avatar">
                    </div>
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
                </div>
        );
    }
}
