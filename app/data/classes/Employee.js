export default class Employee {
  constructor(id) {
    this.id = id || null,
      this.firstName = '',
      this.lastName = '',
      this.status = '',
      this.skills = [],
      this.gender = {},
      this.dateOfBirth = new Date(),
      this.description = ''
  }

  fromRaw(rawEmployee, skillList, genders) {
    this.id = rawEmployee.id;
    this.firstName = rawEmployee.firstName;
    this.lastName = rawEmployee.lastName;
    this.status = rawEmployee.status;
    this.description = rawEmployee.description;

    this.skills = rawEmployee.skills.map(skill => {
      return skillList[skill]
    });
    this.gender = genders[rawEmployee.gender];
    this.dateOfBirth = new Date(rawEmployee.dateOfBirth);
    return this

    
    // let {skills, gender, dateOfBirth, ...rest} = rawEmployee;
    // let result = {...rest, gender: genders[gender], skills: skills.map(skill => skillList[skill]), dateOfBirth: new Date(dateOfBirth)};
    // return Object.assign(new Employee(), result);
  }

  hasRequiredSkills(requiredSkills) {
    return requiredSkills.every(skill => this.skills.map(s => s.id).includes(skill));
  }

  matchesSearchString(searchString) {
    return this.firstName.toLowerCase().includes(searchString.toLowerCase()) || this.lastName.toLowerCase().includes(searchString.toLowerCase());
  }

  profileFilledPercentage() {
    let res = 0;
    if (this.firstName) res += 5;
    if (this.lastName) res += 5;
    if (this.photo) res += 20;
    if (this.gender) res += 5;
    if (this.dateOfBirth) res += 5;
    if (this.status) res += 10;
    if (this.description) res += 10;
    this.skills.forEach(s => res += 5);
    return res
  }
};
