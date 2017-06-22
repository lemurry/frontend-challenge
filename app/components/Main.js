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

export default class Main extends Component {

constructor(props){
  super(props)
}

componentDidMount(){
  let id = this.props.match.params.employeeId;
    this.props.onOpen(id);
}


render() {
  const openedEmployee = (this.props.openedEmployee)
    ? this.props.openedEmployee
    : null;
  // debugger;
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
      <div className="page">
        <div className="header">
          List
        </div>

        <Router>
          <div className="content">
            <EmployeeList {...this.props}/>
            <Route path='/:employeeId' render={(routeProps) => (<DetailedInfo employee={openedEmployee} {...routeProps} {...this.props}/>)}/>
          </div>
        </Router>

      </div>
    </MuiThemeProvider>
  );
}
}