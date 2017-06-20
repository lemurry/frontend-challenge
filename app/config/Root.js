import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppContainer from '../components/AppContainer';

export default class Root extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
