import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import muiThemeable from 'material-ui/styles/muiThemeable';
import Chip from 'material-ui/Chip';
import AutoComplete from 'material-ui/AutoComplete';
import SelectField from 'material-ui/SelectField';
import DatePicker from 'material-ui/DatePicker';
import MenuItem from 'material-ui/MenuItem';

import {EmployeeStore} from '../data/EmployeeStore.js';
import EventTypes from '../data/EventTypes.js';

const EditEmployeeInfo = (props) => {
  const styles = {
    skillStyle: {
      fontSize: '23px',
      padding: '16px 40px',
      color: 'white',
      fontWeight: 'normal'
    },
    selectStyle: {
      fontSize: '23px',
      color: 'white'
    },
    selectListStyle: {
      fontSize: '23px',
      backgroundColor: 'black',
      color: 'white'
    },
    datePickerStyle: {
      fontSize: '23px',
      color: 'white'
    },
    menuItemStyle: {
      color: 'white',
      fontSize: '23px',
      padding: '10px 0'
    },
    hintStyle: {
      color: props.muiTheme.palette.lightTextColor,
      fontSize: '23px'
    },
    autoCompleteStyle: {
      color: props.muiTheme.palette.darkTextColor,
      fontSize: '23px'
    },
    textFieldStyle: {
      fontSize: '23px'
    }
  }

  const employee = props.openedEmployee;

  var skillList = ['angular.js', 'nodejs', 'react', 'html5', 'css3'];

  const skills = employee.skills.map(skill => <Chip onRequestDelete={deleteItem.bind(this)} className="employee-form__skill" labelStyle={styles.skillStyle} key={skill.id}>
    {skill.name}
  </Chip>);

  function deleteItem() {}

  const handleSelectChange = (event, index, value) => employee.gender = value;

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
          <AutoComplete style={{padding: '0 17px'}} inputStyle={styles.textFieldStyle} hintStyle={styles.hintStyle} hintText="start typing..." dataSource={skillList} underlineShow={false}/>
        </div>

        <div className="employee-form__row">

          <SelectField value={employee.gender} onChange={handleSelectChange} floatingLabelFixed={false} menuItemStyle={styles.menuItemStyle} underlineShow={false} floatingLabelText="Select Gender" className="employee-form__select" floatingLabelStyle={styles.selectStyle} listStyle={styles.selectListStyle}>
            <MenuItem value={0} primaryText="Select Gender"/>
            <MenuItem value={1} primaryText="Male"/>
            <MenuItem value={2} primaryText="Female"/>
          </SelectField>

          <DatePicker className="employee-form__datepicker" textFieldStyle={styles.datePickerStyle} hintText="Birthday" underlineShow={false} container="inline"/>
        </div>

        <textarea className="employee-form__textarea" rows="7" cols="45" name="text" placeholder="Add some description"/>
      </div>
    </div>
  )
}

export default muiThemeable()(EditEmployeeInfo);
