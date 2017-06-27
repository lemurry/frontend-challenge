import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {EmployeeList} from './EmployeeList.js'
import {DetailedInfo} from './DetailedInfo.js'
import AddEmployee from './AddEmployee.js'

injectTapEventPlugin();

export default function Main (props) {

    return (
      <MuiThemeProvider>
        <div className="page">
          <div className="header">
            List
          </div>

          <div className="content">
            <EmployeeList {...props}/>

            <div className="detailed-info-area">
              <Route exact path='/add' render={(routeProps) => (<AddEmployee {...props} {...routeProps}/>)}/>
              <Route path='/info/:employeeId' render={(routeProps) => (<DetailedInfo {...props} {...routeProps}/>)}/>
            </div>
          </div>

        </div>
      </MuiThemeProvider>
    )
  }
