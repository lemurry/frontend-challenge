import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {CloseButton} from './CloseButton.js';
import {ViewEmployeeInfo} from './ViewEmployeeInfo.js';
import EditEmployeeInfo from './EditEmployeeInfo.js'

export class DetailedInfo extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let id = this.props.match.params.employeeId;
    // debugger;
    // this.props.onOpen(id);
  }

  render() {
    const employee = this.props.openedEmployee;
    const skillList = this.props.store.skills;
    const gender = this.props.store.gender;

    return (
      <div className="detailed-info">
        {employee && <div>
          <CloseButton {...this.props}/>
          <Switch>
            <Route path='/info/:employeeId/view' render={(routeProps) => (<ViewEmployeeInfo employee={employee} skillList={skillList} gender={gender} {...routeProps}/>)}/>
            <Route path='/info/:employeeId/edit' render={(routeProps) => (<EditEmployeeInfo employee={employee} skillList={skillList} gender={gender} {...routeProps}/>)}/>
          </Switch>
        </div>
        }
      </div>
    )
  }
}
