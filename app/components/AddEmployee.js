import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import {EmployeeStore} from '../data/EmployeeStore.js';
import Employee from '../data/Employee.js';

import EmployeeForm from './EmployeeForm.js'

export default function AddEmployee (props) {
    const employee = new Employee();
    return (
      <div className="detailed-info">
        <EmployeeForm employee={employee} skillList={props.skillList} genders={props.gender} />
      </div>
    )
}
