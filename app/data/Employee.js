import Immutable from 'immutable';

const Employee = Immutable.Record({
  id: '',
  firstName: '',
  lastName: '',
  status: '',
  skills: [],
  gender: 1,
  dateOfBirth: new Date(),
  description: '',
  profileFilledPercentage: 0,
  isOpened: false
});

export default Employee;
