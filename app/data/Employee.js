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


// class Employee1 {
//   constructor(id, firstName, lastName, status, skills, gender, dateOfBirth, description){
//     this.id = '';
//     this.firstName = '';
//     this.lastName= '';
//     this.status= '';
//     this.skills= [];
//     this.gender= 1;
//     this.dateOfBirth= '';
//     this.description= '';
//   }
//
//   get profileFilledPercentage() {
//     return this.countProfileFilledPercentage();
//   }
//
//   countProfileFilledPercentage () {
//     let res = 0;
//     if (firstName) res += 5;
//     if (lastName) res += 5;
//     if (photo) res += 20;
//     if (gender) res += 5;
//     if (dateOfBirth) res += 5;
//     if (status) res += 10;
//     if (description) res += 10;
//     skills.forEach(s => res += 5);
//     return res;
//   }
// }
