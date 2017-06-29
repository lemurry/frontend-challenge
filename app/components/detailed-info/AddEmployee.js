import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Employee from '../../data/classes/Employee.js';

import EmployeeForm from './EmployeeForm.js'

export default function AddEmployee (props) {
    const employee = new Employee();
    const skillList = props.store.skills;
    const gender = props.store.gender;
    return (
      <div className="detailed-info">
        <EmployeeForm employee={employee} skillList={skillList} genders={gender} />
      </div>
    )
}
