import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import AppDialog from '../elements/AppDialog.js'

export class ViewEmployeeInfo extends Component {

  constructor(props) {
    super(props);

    this.state = {deleteDialogOpened: false};

    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  deleteEmployee() {
    this.props.onDelete(employee.id);
    this.props.onClose();
    this.props.history.push('/');
  }

render() {
  const employee = this.props.openedEmployee;
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

          <div className="buttons-row">
            <Link to={`/info/${employee.id}/edit`} className="buttons-row__button buttons-row__button--green">Edit</Link>
            <div className="buttons-row__button buttons-row__button--red" onClick={() => this.setState({deleteDialogOpened: true})}> Delete  </div>
          </div>

          <AppDialog isOpened={this.state.deleteDialogOpened} onYes={() => this.deleteEmployee()} onNo={() => this.setState({deleteDialogOpened: false})} onClose={() => this.setState({deleteDialogOpened: false})} title="Delete employee?" message="Are you sure you want to delete this employee?" />
        </div>
      </div>
    )
}
}
