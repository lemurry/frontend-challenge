import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from '../components/Main.js';

export default function App (props) {

    return (
      <Router>
        <Route path='/:employeeId?' render={(routeProps) => <Main {...routeProps} {...props}/>}/>
      </Router>
    );

}
