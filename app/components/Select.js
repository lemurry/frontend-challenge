import React from 'react';
import ReactDOM from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiThemeable from 'material-ui/styles/muiThemeable';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const Select = (props) => {
  const styles = {
    selectStyle: {
      fontSize: '23px',
      color: 'white'
    },
    selectListStyle: {
      fontSize: '23px',
      backgroundColor: 'black',
      color: 'white'
    },
    menuItemStyle: {
      color: 'white',
      fontSize: '23px',
      padding: '10px 0'
    }
  }
      const selectTheme = {
        palette: {
          primary1Color: "#f4ad49",
          primary2Color: "#f4ad49",
          lightTextColor: "#c0aeb4",
          darkTextColor: "red"
        }
      };

  const handleChange = (event, index, value) => props.onChange(value);

  return (

      <MuiThemeProvider muiTheme={getMuiTheme(selectTheme)}>
          <SelectField value={props.value} onChange={handleChange} floatingLabelFixed={false} menuItemStyle={styles.menuItemStyle} underlineShow={false} floatingLabelText="Select Gender" className="employee-form__select" floatingLabelStyle={styles.selectStyle} listStyle={styles.selectListStyle}>
            <MenuItem value={0} primaryText="Select Gender"/>
            <MenuItem value={1} primaryText="Male"/>
            <MenuItem value={2} primaryText="Female"/>
          </SelectField>
      </MuiThemeProvider>
  )
}

export default muiThemeable()(Select);
