import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {EmployeeListItem} from './EmployeeListItem.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export function EmployeeList (props) {
    const rows = props.employeeList.map((employee) => {
      let opened = employee.id == props.openedEmployee.id;
      return <EmployeeListItem employee={employee} key={employee.id} {...props} opened={opened}/>
    });

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
