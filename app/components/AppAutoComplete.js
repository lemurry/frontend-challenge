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

  addSkill(key) {
    this.setState({searchText: ''});
    this.props.onAddSkill(key)
  };

  deleteSkill(key) {
    this.props.onDeleteSkill(key);
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

    const skillList = this.props.skillList.filter(s => !this.props.skills.includes(s.id)).map(s => s.name);
    const skills = this.props.skills.map(skill => <Chip onRequestDelete={this.deleteSkill} className="employee-form__skill" labelStyle={styles.skillStyle} key={skill.id}>
      {skill.name}
    </Chip>);
    return (
      <div className="employee-form__skill-list">
        {skills}
        <AutoComplete className="employee-form__auto-complete" onNewRequest={this.addSkill} onUpdateInput={this.updateInput} searchText={this.state.searchText} openOnFocus={true} hintText="start typing..." dataSource={skillList} underlineShow={false}/>
      </div>
    )
  }
}
