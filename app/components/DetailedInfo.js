import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {EmployeeStore} from '../data/EmployeeStore.js';
import {CloseButton} from './CloseButton.js';
import {ViewEmployeeInfo} from './ViewEmployeeInfo.js';
import EventTypes from '../data/EventTypes.js';
import {AddEmployeeInfo} from './AddEmployeeInfo.js'

export class DetailedInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: EmployeeStore.getOpenedEmployee()
    };

    this.listChanged = this.listChanged.bind(this);
    EmployeeStore.bind(EventTypes.OPENED_EMPLOYEE_CHANGED, this.listChanged);
  }

  listChanged() {
    this.setState({employee: EmployeeStore.getOpenedEmployee()});
  }

  render() {
    const employee = this.state.employee;
    if (employee) {

let a = this.props;
      debugger;
      return (
        <div className="detailed-info">
          <CloseButton/>
          <Router>
            <Switch>
              <Route exact path='/:employeeId/view' render={(props) => (<ViewEmployeeInfo employee={employee} {...props}/>)}/>
              <Route exact path='/:employeeId/add' render={(props) => (<AddEmployeeInfo employee={employee} {...props}/>)}/>
            </Switch>
            </Router>
        </div>
      );
    } else {
      return <div>
        ok
      </div>
    }

  }
}
