const {body} = require('express-validator');
const validationErrorsHandler = require('./validation-errors-handler');

const editUserInfoValidator = [
  body('email', 'Wrong email format').isEmail(),
  body('firstName', 'First and last names cannot be shorter than 2 or longer than 20 characters').isLength({
    min: 2,
    max: 20
  }),
  body('lastName', 'First and last names cannot be shorter than 2 or longer than 20 characters').isLength({
    min: 2,
    max: 20
  }),
  validationErrorsHandler
];

const changePasswordValidator = [
  body('password', 'Password must contain more than 5 characters').isLength({min: 5}),
  body('password').custom((password, {req}) => {
    if (password !== req.body.passwordConfirm) {
      throw new Error('New password confirmation is incorrect');
    }
    return true;
  }),
  validationErrorsHandler
];

module.exports = {editUserInfoValidator, changePasswordValidator};
