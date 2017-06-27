import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {EmployeeStore} from '../data/EmployeeStore.js';
import EventTypes from '../data/EventTypes.js';

import EmployeeForm from './EmployeeForm.js'

export default function AddEmployee (props) {
    const employee = props.openedEmployee;
    return (
      <EmployeeForm employee={employee} />
    )
}
