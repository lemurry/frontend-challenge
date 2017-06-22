import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {CloseButton} from './CloseButton.js';
import {ViewEmployeeInfo} from './ViewEmployeeInfo.js';
import EditEmployeeInfo from './EditEmployeeInfo.js'

export function DetailedInfo(props) {
      return (
        <div className="detailed-info">
          <CloseButton/>
          <Router>
            <Switch>
              <Route exact path='/:employeeId/view' render={(routeProps) => (<ViewEmployeeInfo {...props} {...routeProps} />)}/>
              <Route exact path='/:employeeId/edit' render={(routeProps) => (<EditEmployeeInfo {...props} {...routeProps} />)}/>
            </Switch>
          </Router>
        </div>
      )
  }

  // <Route exact path='/add' render={(props) => (< employee={employee} {...props}/>)}/>
