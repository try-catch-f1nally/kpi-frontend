const {Schema, model} = require('mongoose');

const User = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String},
  firstName: {type: String},
  lastName: {type: String},
});

module.exports = model('User', User);
