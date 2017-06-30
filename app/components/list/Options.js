import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default function Options (props) {

  const skillList = props.skillList.map(skill => {
    return <MenuItem value={skill.id} primaryText={skill.name} key={skill.id} />
  });

  return (
    <div className={ props.state.optionsOpened ? 'options' : 'options hidden' } >
    <div className="options__section">
    <div className="options__tittle"> Filters </div>
    <div className="filter-container">
      <div className="filter">
        <div className="filter__content">
          <SelectField floatingLabelText="By Gender" value={props.state.selectedGender} onChange={(event, index, value) => props.actions.chooseGender(value)} >
            <MenuItem value={0} primaryText="Male" />
            <MenuItem value={1} primaryText="Female" />
          </SelectField>
          <div onClick={props.actions.clearGender} className="filter__clear-button"> c </div>
        </div>
      </div>
        <div className="filter">
          <div className="filter__content">
            <SelectField floatingLabelText="By Skills" value={props.state.selectedSkills} onChange={(event, index, value) => props.actions.chooseSkills(value)} multiple={true} >
              {skillList}
            </SelectField>
            <div onClick={props.actions.clearSkills} className="filter__clear-button"> c </div>
          </div>
        </div>
    </div>
    </div>

    <div className="options__section">
        <div className="options__tittle"> Search </div>
      <div className="search-area">
        <input className="search__string" />
        <div className="search__button"> s </div>
      </div>
    </div>
  </div>
  )
}
