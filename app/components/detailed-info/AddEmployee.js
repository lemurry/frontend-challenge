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

  // const employee = props.store.newEmployee;
  // const skillList = props.store.skills;
  //   const gender = props.store.gender;
  //   return (
  //     <div className="detailed-info">
  //       <EmployeeForm employee={employee} skillList={skillList} genders={gender} onSave={props.onAdd} onCancel={props.onCancelAdding} />
  //     </div>
  //   )
//////////////////////////////////
    // const employee = props.store.newEmployee;
    // debugger;
    // if (employee && Object.getOwnPropertyNames(employee).length != 0 && employee.id != null) {
    // debugger;
    //   const skillList = props.store.skills;
    //   const gender = props.store.gender;
    //   return (
    //     <div className="detailed-info">
    //       <EmployeeForm employee={employee} skillList={skillList} genders={gender} onSave={props.onAdd} onCancel={props.onCancelAdding} />
    //     </div>
    //   )
    // }
    //
    // setTimeout(() => {
    //   props.onStartAdding(new Employee());
    // }, 0);
    // return null;
//////////////////////////////////
    // const employee = props.newEmployee;
    // // debugger;
    // if (employee && employee.id != null) {
    // debugger;
    //   const skillList = props.store.skills;
    //   const gender = props.store.gender;
    //   return (
    //     <div className="detailed-info">
    //       <EmployeeForm employee={employee} skillList={skillList} genders={gender} onSave={props.onAdd} onCancel={props.onCancelAdding} />
    //     </div>
    //   )
    // }
    //
    // debugger;
    // setTimeout(() => {
    //   props.onStartAdding(new Employee());
    // }, 0);
    //
    // return null;
}
