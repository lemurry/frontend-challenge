export default class DBEmployee {
  constructor(employee) {
    this.id = employee.id;
    this.firstName = employee.firstName;
    this.lastName = employee.lastName;
    this.status = employee.status;

    this.skills = employee.skills.map(s => s.id);
    this.gender = employee.gender.id;
    this.dateOfBirth = employee.dateOfBirth;
    this.description = employee.description;
    this.profileFilledPercentage = employee.profileFilledPercentage;
  }
};
