import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {EmployeeListItem} from './EmployeeListItem.js';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export function EmployeeList(props) {
  const rows = props.employeeList.map((employee) => {
    // let opened = employee.id == props.openedEmployee.id; opened={opened}
    return <EmployeeListItem employee={employee} key={employee.id} {...props}/>
  });

  const addEmployee = () => {
    props.onClose();
    props.history.push(`/add`);
    // props.onAdd();
  }

  return (
    <div className="list">
      <div className="add-button" onClick={addEmployee}/>
      <div>
        {rows}
      </div>
    </div>
  )
}
