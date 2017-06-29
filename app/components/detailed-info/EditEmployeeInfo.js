import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import DBEmployee from '../../data/classes/DBEmployee.js';

import EmployeeForm from './EmployeeForm.js'

export default function AddEmployee (props) {
    const employee = props.openedEmployee;
    const skillList = props.store.skills;
    const gender = props.store.gender;

    const cancelChanges = () => props.history.push(`view`);

    const editEmployee = (employee) => {
      props.onEdit(new DBEmployee(employee))
    }

    return (
      <EmployeeForm employee={employee} skillList={skillList} genders={gender} onSave={editEmployee} onCancel={cancelChanges} />
    )
}
