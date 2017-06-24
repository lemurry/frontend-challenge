import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import {EmployeeList} from './EmployeeList.js'
import AddEmployee from './AddEmployee.js'
import {CloseButton} from './CloseButton.js';
import {ViewEmployeeInfo} from './ViewEmployeeInfo.js';
import EditEmployeeInfo from './EditEmployeeInfo.js'
injectTapEventPlugin();

const muiTheme = {
  palette: {
    primary1Color: "#f4ad49",
    primary2Color: "#f4ad49",
    lightTextColor: "#c0aeb4",
    darkTextColor: "#6d4552"
  }
};

export default class Main extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let id = this.props.match.params.employeeId;
    // debugger;
    this.props.onOpen(id);
  }

  render() {
    // debugger;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <div className="page">
          <div className="header">
            List
          </div>

          <div className="content">
            <EmployeeList {...this.props}/>
            <div className="detailed-info-area">
              <div className="detailed-info">
                {this.props.openedEmployee &&
                  <div>
                    <CloseButton {...this.props}/>
                    <Switch>
                      <Route exact path='/info/:employeeId/view' render={(routeProps) => (<ViewEmployeeInfo {...this.props} {...routeProps}/>)}/>
                      <Route exact path='/info/:employeeId/edit' render={(routeProps) => (<EditEmployeeInfo {...this.props} {...routeProps}/>)}/>
                    </Switch>
                  </div>
                }
                <Route path='/add' render={(routeProps) => (<AddEmployee {...routeProps} {...this.props}/>)}/>
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
