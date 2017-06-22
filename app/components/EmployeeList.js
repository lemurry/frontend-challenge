import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {EmployeeListItem} from './EmployeeListItem.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export function EmployeeList (props) {
    const rows = props.employeeList.sort((a, b) => {
      return a.id - b.id;
    }).map(e => <EmployeeListItem employee={e} key={e.id} {...props}/>);

    return (

      <div className="list">
          <div className="add-button" onClick={props.onAdd} />
        <div>
          {rows}
        </div>
      </div>
    )
  }

    // <Link to="/add">
    //     <div className="add-button"/>
    //   </Link>
