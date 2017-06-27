import React from 'react';
import ReactDOM from 'react-dom';

import Chip from 'material-ui/Chip';
import AutoComplete from 'material-ui/AutoComplete';

export default function AppAutoComplete (props) {
  const styles = {
    skillStyle: {
      fontSize: '23px',
      padding: '16px 40px',
      color: '#fff',
      fontWeight: 'normal'
    }
  }

  let skillList = ['angular.js', 'nodejs', 'react', 'html5', 'css3'];

  const addSkill = (key) => props.onDeleteSkill(key);
  const deleteSkill = (key) => props.onAddSkill(key);

  const handleChange = (event, index, value) => props.onChange(value);
  const skills = props.skills.map(skill => <Chip onRequestDelete={deleteSkill} className="employee-form__skill" labelStyle={styles.skillStyle} key={skill.id}>
    {skill.name}
  </Chip>);
  return (
    <div className="employee-form__skill-list">
      {skills}
      <AutoComplete className="employee-form__auto-complete" onNewRequest={addSkill} openOnFocus={true} hintText="start typing..." dataSource={skillList} underlineShow={false}/>
    </div>
  )
}
