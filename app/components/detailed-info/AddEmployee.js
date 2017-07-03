import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import DBEmployee from '../../data/classes/DBEmployee.js';

import EmployeeForm from './EmployeeForm.js'

export default function AddEmployee (props) {
  const employee = props.store.newEmployee;
  if (employee && Object.getOwnPropertyNames(employee).length > 0) {
     const skillList = props.store.skills;
     const gender = props.store.gender;
     return (
       <div className="detailed-info">
         <EmployeeForm employee={employee} skillList={skillList} genders={gender} />
       </div>
     )
   }
   else {
     props.onCreateNewEmployee(new DBEmployee());
     return null;
   }
}
