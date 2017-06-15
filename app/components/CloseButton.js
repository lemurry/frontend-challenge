import React, {Component} from 'react';
import AppDispatcher from '../data/AppDispatcher.js';
import {EmployeeStore} from '../data/EmployeeStore.js';

export class CloseButton extends Component {
  constructor(props) {
    super(props);

    this.closeEmployeeInfo = this.closeEmployeeInfo.bind(this);
  }

  closeEmployeeInfo() {
    AppDispatcher.dispatch({
      eventName: "close-employee"
    });
  }

  render() {
    return (
      <div onClick={this.closeEmployeeInfo} className="close-button">

      </div>
    );
  }
}
