export default class DBEmployee {
  constructor(employee) {
    let {skills, gender, ...rest} = employee;
    let result = {...rest, gender: gender.id, skills: skills.map(s => s.id) };
    Object.assign(this, result);
  }
};
