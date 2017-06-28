import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {EmployeeStore} from '../data/EmployeeStore.js';

import EmployeeForm from './EmployeeForm.js'

export default function AddEmployee (props) {
    const employee = props.employee;
    return (
      <EmployeeForm employee={employee} skillList={props.skillList} />
    )
}
