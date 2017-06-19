import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Chip from 'material-ui/Chip';
import AutoComplete from 'material-ui/AutoComplete';
import SelectField from 'material-ui/SelectField';
import DatePicker from 'material-ui/DatePicker';
import MenuItem from 'material-ui/MenuItem';
import {EmployeeStore} from '../data/EmployeeStore.js';
import EventTypes from '../data/EventTypes.js';
import muiThemeable from 'material-ui/styles/muiThemeable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const AddEmployeeInfo = (props) => {
  const employee = props.employee;
  const skillStyle = {
    fontSize: '23px',
    padding: '16px 40px',
    color: 'white',
    fontWeight: 'normal'
  };

  const selectStyle = {
    fontSize: '23px',
    color: 'white'
  };

  const selectListStyle = {
    fontSize: '23px',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '6px'
  };

  const datePickerStyle = {
    fontSize: '23px',
    color: 'white'
  };

  const menuItemStyle = {
    color: 'white',
    fontSize: '23px',
    padding: '10px 0'
  }

  const hintStyle = {
    color: props.muiTheme.palette.lightTextColor,
    fontSize: '23px'
  }

  const autoCompleteStyle = {
      color: props.muiTheme.palette.darkTextColor,
      fontSize: '23px'
  }

  var skillList = ['angular.js', 'nodejs', 'react', 'html5', 'css3'];

  function deleteItem() {}

  const skills = employee.skills.map(skill => <Chip onRequestDelete={deleteItem.bind(this)} className="employee-form__skill" labelStyle={skillStyle} key={skill.id}>
    {skill.name}
  </Chip>);

  return (
    <div className="detailed-info-container">
      <div className="left-column">
        <div className="avatar"/>
        <div className="filled-profile">
          Filled profile: {employee.profileFilledPercentage}%
        </div>
      </div>

      <div className="employee-form">
        <div className="employee-form__row employee-form__row--full">

          <input className="employee-form__input employee-form__input--short" type="text" placeholder="First name"/>

          <input className="employee-form__input employee-form__input--short" type="text" placeholder="Last name"/>

        </div>
        <input className="employee-form__input" type="text" placeholder="Some text"/>

        <div className="employee-form__skill-list">
          {skills}
          <AutoComplete hintStyle={hintStyle} textFieldStyle={autoCompleteStyle} hintText="start typing..." dataSource={skillList} underlineShow={false} />
        </div>

        <div className="employee-form__row">

          <SelectField floatingLabelFixed={false} menuItemStyle={menuItemStyle} underlineShow={false} floatingLabelText="Select Gender" className="employee-form__select" floatingLabelStyle={selectStyle} listStyle={selectListStyle}>
            <MenuItem value={1} primaryText="Male"/>
            <MenuItem value={2} primaryText="Female"/>
          </SelectField>

          <DatePicker className="employee-form__datepicker" textFieldStyle={datePickerStyle} hintText="Birthday" underlineShow={false} container="inline"/>
        </div>

        <textarea className="employee-form__textarea" rows="7" cols="45" name="text" placeholder="Add some description"/>
      </div>
    </div>
  )
}

export default muiThemeable()(AddEmployeeInfo);
//
// <div className="employee-form__select">
// <select>
//   <option>Select Gender</option>
//   <option>Male</option>
//   <option>Female</option>
// </select>
// </div>
