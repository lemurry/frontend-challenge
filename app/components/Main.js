import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {EmployeeList} from './list/EmployeeList.js'

import {DetailedInfo} from './detailed-info/DetailedInfo.js'
import AddEmployee from './detailed-info/AddEmployee.js'

injectTapEventPlugin();

export default class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // debugger;
    this.props.onGetWholeState();
  }

  render() {
    let store = this.props.store;

    if (Object.getOwnPropertyNames(store).length == 0) {
      return null;
    }
    
    return (
      <MuiThemeProvider>
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
