export default class Employee {
  constructor(id) {
    this.id = id || null,
      this.firstName = '',
      this.lastName = '',
      this.status = '',
      this.skills = [],
      this.gender = {},
      this.dateOfBirth = new Date(),
      this.description = '',
      this.profileFilledPercentage = 0
  }

  fromRaw(rawEmployee, skillList, genders) {
    this.id = rawEmployee.id;
    this.firstName = rawEmployee.firstName;
    this.lastName = rawEmployee.lastName;
    this.status = rawEmployee.status;
    this.description = rawEmployee.description;
    this.profileFilledPercentage = rawEmployee.profileFilledPercentage;

    this.skills = rawEmployee.skills.map(skill => {
      return skillList[skill]
    });
    this.gender = genders[rawEmployee.gender];
    this.dateOfBirth = new Date(rawEmployee.dateOfBirth);
    return this
  }

  hasRequiredSkills(requiredSkills) {
    return requiredSkills.every(skill => this.skills.map(s => s.id).includes(skill));
  }

  matchesSearchString(searchString) {
    return this.firstName.toLowerCase().includes(searchString.toLowerCase()) || this.lastName.toLowerCase().includes(searchString.toLowerCase());
  }
};
