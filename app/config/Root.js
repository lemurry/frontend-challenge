import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import AddEmployeeInfo from '../components/AddEmployeeInfo.js';

export default class Root extends Component {
  render() {
    return (
      <App/>
    );
  }
}
