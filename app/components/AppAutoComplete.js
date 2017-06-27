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
    skillStyle: {
      fontSize: '23px',
      padding: '16px 40px',
      color: '#fff',
      fontWeight: 'normal'
    }
  }

  let skillList = ['angular.js', 'nodejs', 'react', 'html5', 'css3'];

  const deleteSkill = () => {};

  const handleChange = (event, index, value) => props.onChange(value);
  const skills = props.skills.map(skill => <Chip onRequestDelete={deleteSkill.bind(this)} className="employee-form__skill" labelStyle={styles.skillStyle} key={skill.id}>
    {skill.name}
  </Chip>);
  return (
    <div className="employee-form__skill-list">
      {skills}
      <AutoComplete className="employee-form__auto-complete" hintText="start typing..." dataSource={skillList} underlineShow={false}/>
    </div>
  )
}

export default muiThemeable()(AppAutoComplete);
