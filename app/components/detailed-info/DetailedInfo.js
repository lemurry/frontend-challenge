import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {CloseButton} from '../elements/CloseButton.js';
import {ViewEmployeeInfo} from './ViewEmployeeInfo.js';
import EditEmployeeInfo from './EditEmployeeInfo.js'

export class DetailedInfo extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let id = this.props.match.params.employeeId;
    setTimeout(() => {
      this.props.onOpen(id);
    }, 0);
  }

  render() {
    const employee = this.props.openedEmployee;

    return (
      <div className="detailed-info">
        {employee && <div>
          <CloseButton {...this.props}/>
          <Switch>
            <Route path='/info/:employeeId/view' render={(routeProps) => (<ViewEmployeeInfo {...this.props} {...routeProps}/>)}/>
            <Route path='/info/:employeeId/edit' render={(routeProps) => (<EditEmployeeInfo {...this.props} {...routeProps}/>)}/>
          </Switch>
        </div>
        }
      </div>
    )
  }
}
