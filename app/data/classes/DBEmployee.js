export default class DBEmployee {
  constructor(id) {
    this.id = id || null,
      this.firstName = '',
      this.lastName = '',
      this.status = '',
      this.skills = [],
      this.gender = null,
      this.dateOfBirth = new Date(),
      this.description = ''
  }

  toRaw(employee) {
    let {skills, gender, ...rest} = employee;
    let result = {...rest, gender: gender.id, skills: skills.map(s => s.id) };
    Object.assign(this, result);
    return this;
  }
};
