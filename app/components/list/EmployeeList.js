import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import {EmployeeListItem} from './EmployeeListItem.js';
import Options from './Options.js';

export class EmployeeList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      optionsOpened: false,
      selectedGender: null,
      selectedSkills: [],
      searchString: ''
    };

    this.addEmployee = this.addEmployee.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
    this.chooseGender = this.chooseGender.bind(this);
    this.chooseSkills = this.chooseSkills.bind(this);
    this.setSearchString = this.setSearchString.bind(this);
    this.clearGender = this.clearGender.bind(this);
    this.clearSkills = this.clearSkills.bind(this);
    this.clearSearchString = this.clearSearchString.bind(this);
  }

  addEmployee() {
    this.props.history.push(`/add`);
  }

  toggleOptions() {
    const optionsOpened = !this.state.optionsOpened;
    this.setState({optionsOpened: optionsOpened});
  }

  chooseGender(value) {
    this.setState({selectedGender: value})
  }

  chooseSkills(value) {
    this.setState({selectedSkills: value})
  }

    setSearchString(searchString) {
      this.setState({searchString: searchString})
    }

  clearGender() {
    this.setState({selectedGender: null})
  }

  clearSkills() {
    this.setState({selectedSkills: []})
  }

  clearSearchString() {
    this.setState({searchString: ''})
  }

  render() {
    const selectedSkills = this.state.selectedSkills;
    const selectedGender = this.state.selectedGender;
    const searchString = this.state.searchString;
    const rows = this.props.store.employeeList
      .filter(employee => employee.hasRequiredSkills(selectedSkills))
      .filter(employee => this.state.selectedGender != null ? employee.gender.id == selectedGender : true)
      .filter(employee => employee.matchesSearchString(searchString))
      .map((employee) => {
      // let opened = employee.id == props.openedEmployee.id; opened={opened}
        return <EmployeeListItem employee={employee} key={employee.id} {...this.props}/>
    });

    const actions = {
      chooseGender: this.chooseGender,
      clearGender: this.clearGender,
      chooseSkills: this.chooseSkills,
      clearSkills: this.clearSkills,
      setSearchString: this.setSearchString,
      clearSearchString: this.clearSearchString
    }

    return (
      <div className="list">
        <div className="list__options-button" onClick={this.toggleOptions}>
          Options
        </div>
        <Options state={this.state} actions={actions} skillList={this.props.store.skills}/>

        <div className="list__add-button" onClick={this.addEmployee}/>
        <div>
          {rows}
        </div>
      </div>
    )
  }
}
