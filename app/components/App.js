import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {EmployeeList} from './EmployeeList.js'
import {DetailedInfo} from './DetailedInfo.js'

injectTapEventPlugin();

const muiTheme = {
  palette: {
    primary1Color: "#f4ad49",
    primary2Color: "#f4ad49",
    lightTextColor: "#c0aeb4",
    darkTextColor: "red"
  }
};

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
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
      </MuiThemeProvider>
    );
  }
}
