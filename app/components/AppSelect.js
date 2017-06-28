import React from 'react';
import ReactDOM from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default function AppSelect (props) {
  const styles = {
    selectStyle: {
      fontSize: '23px',
      color: '#fff'
    },
    selectListStyle: {
      fontSize: '23px',
      backgroundColor: '#000',
      color: '#fff'
    },
    menuItemStyle: {
      color: '#fff',
      fontSize: '23px',
      padding: '10px 0'
    }
  }
  const selectTheme = {
    palette: {
      primary1Color: "#f4ad49",
      primary2Color: "#f4ad49",
      lightTextColor: "#c0aeb4",
      accent1Color: "#fff",
      textColor: "#fff",
      alternateTextColor: "#fff"
    }
  };

  const handleChange = (event, index, value) => props.onChange(value);

  return (

    <MuiThemeProvider muiTheme={getMuiTheme(selectTheme)}>
      <SelectField selectedMenuItemStyle={{
        backgroundColor: "#333"
      }} value={props.value} onChange={handleChange} menuItemStyle={styles.menuItemStyle} underlineShow={false} hintText="Select Gender" className="employee-form__select" floatingLabelStyle={styles.selectStyle} listStyle={styles.selectListStyle}>
        <MenuItem value={0} primaryText="Select Gender"/>
        <MenuItem value={1} primaryText="Male"/>
        <MenuItem value={2} primaryText="Female"/>
      </SelectField>
    </MuiThemeProvider>
  )
}
