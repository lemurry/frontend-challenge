import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {EmployeeList} from './EmployeeList.js'
import {DetailedInfo} from './DetailedInfo.js'

export default class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="header">
          List
        </div>

        <Router>
          <div className="content">
            <EmployeeList/>
            <div className="detailed-info-area">
              <Route path='/:employeeId' component={DetailedInfo}/>
            </div>
          </div>
        </Router>

      </div>
    );
  }
}
