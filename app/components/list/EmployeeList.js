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
    this.onScroll = this.onScroll.bind(this);
  }

  addEmployee() {
    this.props.onClose();
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

  onScroll(event) {
    // debugger;
    if (event.deltaY > 0){
      this.refs.scrollable.scrollTop += 20;
    }
    else {
      this.refs.scrollable.scrollTop -= 20;
    }
  }

count() {
  for(var i = 0; i < 5; i++){
    function f(j) {console.log(j)};
    f = f.bind(null, i);
    setTimeout(f);
  }
}


  render() {
    const selectedSkills = this.state.selectedSkills;
    const selectedGender = this.state.selectedGender;
    const searchString = this.state.searchString;
    const openedEmployeeId = this.props.openedEmployee != null ? this.props.openedEmployee.id : null;
    const rows = this.props.store.employeeList
      .filter(employee => employee.hasRequiredSkills(selectedSkills))
      .filter(employee => this.state.selectedGender != null ? employee.gender.id == selectedGender : true)
      .filter(employee => employee.matchesSearchString(searchString))
      .map((employee) => {
      return <EmployeeListItem employee={employee} key={employee.id} opened={employee.id == openedEmployeeId} {...this.props}/>
    });

    const actions = {
      chooseGender: this.chooseGender,
      clearGender: this.clearGender,
      chooseSkills: this.chooseSkills,
      clearSkills: this.clearSkills,
      setSearchString: this.setSearchString,
      clearSearchString: this.clearSearchString
    }

    // this.count();

    return (
      <div className="list">
        <div className="list__button" onClick={this.toggleOptions}>
          <div className="list__options-button"> Options </div>
        </div>
        <Options state={this.state} actions={actions} skillList={this.props.store.skills}/>

        <div className="list__button" onClick={this.addEmployee}>
          <div className="list__add-button"/>
        </div>
        <div className={this.state.optionsOpened ? "list__items-wrapper list__items-wrapper--short" : "list__items-wrapper"}>
        <div ref="scrollable" className="list__items-container" onWheel={this.onScroll}>
          {rows}
          </div>
        </div>
      </div>
    )
  }
}
