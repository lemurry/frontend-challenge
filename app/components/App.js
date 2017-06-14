import React, { Component } from 'react';
import {EmployeeList} from './EmployeeList.js'
import {DetailedInfo} from './DetailedInfo.js'

export default class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="header">
          List
        </div>
        <div className="content">
          <EmployeeList />
          <div className="detailed-info-area">
            <DetailedInfo />
          </div>
        </div>
      </div>
    );
  }
}
