import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import EmployeeForm from './EmployeeForm.js'

export default function AddEmployee (props) {
    const employee = props.openedEmployee;
    const skillList = props.store.skills;
    const gender = props.store.gender;
    return (
      <EmployeeForm employee={employee} skillList={skillList} genders={gender} />
    )
}
