import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {EmployeeListItem} from './EmployeeListItem.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export function EmployeeList (props) {
    const rows = props.list.sort((a, b) => {
      return a.id - b.id;
    }).map((e) => {
      return <EmployeeListItem employee={e} key={e.id}/>;
    });

    return (
      <div className="list">
        <Link to="/add">
          <div className="add-button"/>
        </Link>
        <div>
          {rows}
        </div>
      </div>
    );
  }
