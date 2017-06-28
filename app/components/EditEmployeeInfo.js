import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {EmployeeStore} from '../data/EmployeeStore.js';
import EmployeeForm from './EmployeeForm.js'

export default function AddEmployee (props) {
    const employee = props.employee;
    const skillList = props.store.skills;
    const gender = props.store.gender;
    return (
      <EmployeeForm employee={employee} skillList={skillList} genders={gender} />
    )
}
