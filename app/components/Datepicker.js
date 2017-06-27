import React from 'react';
import ReactDOM from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiThemeable from 'material-ui/styles/muiThemeable';
import DatePicker from 'material-ui/DatePicker';

const AppDatePicker = (props) => {
  const styles = {
    datePickerStyle: {
      fontSize: '23px',
      color: '#fff'
    }
  }

  const date = props.date;

  const handleChange = (event, index, value) => props.onChange(value);

  const datePickerTheme = {
    palette: {
      primary1Color: "#f4ad49",
      primary2Color: "#f4ad49",
      lightTextColor: "#c0aeb4",
      textColor: "#333",
      alternateTextColor: "#fff"
    }
  };
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(datePickerTheme)}>
      <DatePicker value={props.date} onChange={handleChange} className="employee-form__datepicker" autoOk={true} textFieldStyle={styles.datePickerStyle} hintText="Birthday" underlineShow={false} container="inline"/>
    </MuiThemeProvider>
  )
}

export default muiThemeable()(AppDatePicker);
