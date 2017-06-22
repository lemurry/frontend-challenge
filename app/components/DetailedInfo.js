import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {CloseButton} from './CloseButton.js';
import {ViewEmployeeInfo} from './ViewEmployeeInfo.js';
import EditEmployeeInfo from './EditEmployeeInfo.js'

export function DetailedInfo(props) {

  return (

    <div className="detailed-info-area">
      {props.openedEmployee && <div className="detailed-info">
        <CloseButton {...props}/>
        <Router>
          <Switch>
            <Route exact path='/:employeeId/view' render={(routeProps) => (<ViewEmployeeInfo {...props} {...routeProps} {...props}/>)}/>
            <Route exact path='/:employeeId/edit' render={(routeProps) => (<EditEmployeeInfo {...props} {...routeProps} {...props}/>)}/>
          </Switch>
        </Router>
      </div>
      }
    </div>
  )
}
