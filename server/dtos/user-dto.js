module.exports = class UserDto {
  constructor(model) {
    this.id = model._id;
    this.email = model.email;
    this.firstName = model.firstName;
    this.lastName = model.lastName;
  }
};
