import Immutable from 'immutable';

const Employee = Immutable.Record({
  id: '',
  firstName: '',
  lastName: '',
  status: '',
  skills: [],
  gender: 1,
  dateOfBirth: '',
  description: '',
  profileFilledPercentage: 0
});

export default Employee;
