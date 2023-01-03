const ApiError = require('../exceptions/api-error');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

class UserService {
  async editInfo(userId, firstName, lastName, email) {
    const user = await User.findOne({_id: userId});

    if (user.email !== email) {
      const anotherUserWithSuchEmail = await User.findOne({email});
      if (anotherUserWithSuchEmail) throw ApiError.BadRequest('User with such email already exist.');
    }
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    await user.save();
    return {firstName, lastName, email};
  }

  async changePassword(userId, oldPassword, newPassword) {
    const user = await User.findOne({_id: userId});
    if (!bcrypt.compareSync(oldPassword, user.password)) {
      throw ApiError.BadRequest('The old password is incorrect.');
    }
    user.password = bcrypt.hashSync(newPassword, 10);
    await user.save();
  }
}

module.exports = new UserService();
