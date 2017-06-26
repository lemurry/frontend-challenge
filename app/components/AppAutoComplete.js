import React from 'react';
import ReactDOM from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiThemeable from 'material-ui/styles/muiThemeable';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Chip from 'material-ui/Chip';
import AutoComplete from 'material-ui/AutoComplete';

const AppAutoComplete = (props) => {
  const styles = {
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
    },
    skillStyle: {
      fontSize: '23px',
      padding: '16px 40px',
      color: 'white',
      fontWeight: 'normal'
    }
  }

  let skillList = ['angular.js', 'nodejs', 'react', 'html5', 'css3'];

  const deleteItem = () => {};

  const handleChange = (event, index, value) => props.onChange(value);
  const skills = props.skills.map(skill => <Chip onRequestDelete={deleteItem.bind(this)} className="employee-form__skill" labelStyle={styles.skillStyle} key={skill.id}>
    {skill.name}
  </Chip>);
  return (
    <div className="employee-form__skill-list">
      {skills}
      <AutoComplete style={{
        padding: '0 17px'
      }} inputStyle={styles.textFieldStyle} hintStyle={styles.hintStyle} hintText="start typing..." dataSource={skillList} underlineShow={false}/>
    </div>
  )
}

export default muiThemeable()(AppAutoComplete);
