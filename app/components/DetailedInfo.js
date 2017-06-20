import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {CloseButton} from './CloseButton.js';
import {ViewEmployeeInfo} from './ViewEmployeeInfo.js';
import EditEmployeeInfo from './EditEmployeeInfo.js'

export function DetailedInfo(props) {
    const employee = props.employee;

      return (
        <div className="detailed-info">
          <CloseButton/>
          <Router>
            <Switch>
              <Route exact path='/:employeeId/view' render={(props) => (<ViewEmployeeInfo employee={employee} {...props}/>)}/>
              <Route exact path='/:employeeId/edit' render={(props) => (<EditEmployeeInfo employee={employee} {...props}/>)}/>
            </Switch>
          </Router>
        </div>
      )
  }

  // <Route exact path='/add' render={(props) => (< employee={employee} {...props}/>)}/>
