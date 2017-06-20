import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {CloseButton} from './CloseButton.js';
import {ViewEmployeeInfo} from './ViewEmployeeInfo.js';
import AddEmployeeInfo from './AddEmployeeInfo.js'

export function DetailedInfo(props) {
    const employee = props.employee;

      return (
        <div className="detailed-info">
          <CloseButton/>
          <Router>
            <Switch>
              <Route exact path='/:employeeId/view' render={(props) => (<ViewEmployeeInfo employee={employee} {...props}/>)}/>
              <Route exact path='/add' render={(props) => (<AddEmployeeInfo employee={employee} {...props}/>)}/>
            </Switch>
          </Router>
        </div>
      )
  }
