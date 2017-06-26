import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import {EmployeeList} from './EmployeeList.js'
import {DetailedInfo} from './DetailedInfo.js'
import AddEmployee from './AddEmployee.js'

injectTapEventPlugin();

const muiTheme = {
};

export default class Main extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <div className="page">
          <div className="header">
            List
          </div>

          <div className="content">
            <EmployeeList {...this.props}/>

            <div className="detailed-info-area">
              <Route exact path='/add' render={(routeProps) => (<AddEmployee {...this.props} {...routeProps}/>)}/>
              <Route path='/info/:employeeId' render={(routeProps) => (<DetailedInfo {...this.props} {...routeProps}/>)}/>
            </div>
          </div>

        </div>
      </MuiThemeProvider>
    )
  }
}
