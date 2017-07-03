import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Chip from 'material-ui/Chip';
import AutoComplete from 'material-ui/AutoComplete';

export default class AppAutoComplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ''
    };

    this.addSkill = this.addSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  addSkill(string, index) {
    this.setState({searchText: ''});
    this.props.onAddSkill(string)
  };

  deleteSkill(skill) {
    this.props.onDeleteSkill(skill);
  };

  updateInput(searchText) {
    this.setState({searchText: searchText})
  };

  render() {
    const styles = {
      skillStyle: {
        fontSize: '23px',
        padding: '16px 40px',
        color: '#fff',
        fontWeight: 'normal'
      }
    }

    const skillList = this.props.skillList.filter(s => !this.props.skills.map(s => s.id).includes(s.id)).map(s => s.name);
    const skills = this.props.skills.map(skill => <Chip onRequestDelete={() => this.deleteSkill(skill)} className="employee-form__skill" labelStyle={styles.skillStyle} key={skill.id}>
      {skill.name}
    </Chip>);
    const autoCompleteEnabled = skills.length < 5;

    return (
      <div className="employee-form__skill-list">
        {skills}
        <AutoComplete style={{display: autoCompleteEnabled ? 'block' : 'none' }} className="employee-form__auto-complete" onNewRequest={this.addSkill} onUpdateInput={this.updateInput} searchText={this.state.searchText} openOnFocus={true} hintText="start typing..." dataSource={skillList} openOnFocus={true} underlineShow={false}/>
      </div>
    )
  }
}
