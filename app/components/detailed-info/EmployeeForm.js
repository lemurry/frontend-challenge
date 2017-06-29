import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Employee from '../../data/classes/Employee.js';

import AppAutoComplete from '../elements/AppAutoComplete.js'
import AppDatePicker from '../elements/AppDatePicker.js'
import AppSelect from '../elements/AppSelect.js'

export default class EmployeeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: this.props.employee
    };

    this.onSelectChanged = this.onSelectChanged.bind(this);
    this.onDateChanged = this.onDateChanged.bind(this);
    this.onAddSkill = this.onAddSkill.bind(this);
    this.onDeleteSkill = this.onDeleteSkill.bind(this);
    this.onFirstNameChanged = this.onFirstNameChanged.bind(this);
    this.onLastNameChanged = this.onLastNameChanged.bind(this);
    this.onStatusChanged = this.onStatusChanged.bind(this);
    this.onDescriptionChanged = this.onDescriptionChanged.bind(this);

    this.onSave = this.onSave.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onSelectChanged(value) {
    if (value != null) {
      let employee = this.state.employee;
      employee.gender = this.props.genders[value];
      this.setState({employee: employee});}
    }

  onDateChanged(date) {
    let employee = this.state.employee;
    employee.dateOfBirth = new Date(date);
    this.setState({employee: employee});}

  onAddSkill(text) {
    let employee = this.state.employee;
    let skill = this.props.skillList.find(s => s.name == text);
    employee.skills.push(skill);
    this.setState({employee: employee});}

  onDeleteSkill(skill) {
    let employee = this.state.employee;
    let index = employee.skills.indexOf(skill);
    employee.skills.splice(index, 1);
    this.setState({employee: employee})
  }

  onFirstNameChanged(event) {
    let employee = this.state.employee;
    employee.firstName = event.target.value;
    this.setState({employee: employee});
  }

  onLastNameChanged(event) {
    let employee = this.state.employee;
    employee.lastName = event.target.value;
    this.setState({employee: employee});
  }

  onStatusChanged(event) {
    let employee = this.state.employee;
    employee.status = event.target.value;
    this.setState({employee: employee});
  }

  onDescriptionChanged(event) {
    let employee = this.state.employee;
    employee.description = event.target.value;
    this.setState({employee: employee});
  }

  onSave() {
    this.props.onSave();
  }

  onCancel() {
    this.props.onCancel();
  }

  render() {
    const employee = this.state.employee;
    const skillList = this.props.skillList;

    return (
      <div className="detailed-info-container">
        <div className="left-column">
        <div className="filled-profile">
          Id: {employee.id}
        </div>
          <div className="avatar"/>
          <div className="filled-profile">
            Filled profile: {employee.profileFilledPercentage}%
          </div>
        </div>

        <div className="employee-form">
          <div className="employee-form__row employee-form__row--full">
            <input className="employee-form__input employee-form__input--short" type="text" placeholder="First name" value={employee.firstName} onChange={this.onFirstNameChanged}/>
            <input className="employee-form__input employee-form__input--short" type="text" placeholder="Last name" value={employee.lastName} onChange={this.onLastNameChanged}/>
          </div>
          <input className="employee-form__input" type="text" placeholder="Some text" value={employee.status} onChange={this.onStatusChanged}/>

          <AppAutoComplete skillList={skillList} skills={employee.skills} onAddSkill={this.onAddSkill} onDeleteSkill={this.onDeleteSkill}/>

          <div className="employee-form__row">

            <AppSelect value={this.state.employee.gender.id} onChange={this.onSelectChanged}/>

            <AppDatePicker date={this.state.employee.dateOfBirth} onChange={this.onDateChanged}/>

          </div>

          <textarea className="employee-form__textarea" rows="7" cols="45" name="text" placeholder="Add some description"  value={employee.description}  onChange={this.onDescriptionChanged}/>

          <div className="buttons-row">
            <div className="buttons-row__button buttons-row__button--green" onClick={this.onSave} > Save </div>
            <div className="buttons-row__button buttons-row__button--red" onClick={this.onCancel} > Cancel </div>
          </div>

        </div>
      </div>
    )
  }
}
