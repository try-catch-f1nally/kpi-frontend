const {body} = require('express-validator');
const validationErrorsHandler = require('./validation-errors-handler');

const registerValidator = [

  body('password', 'Password must contain more than 5 characters').isLength({min: 5}),
  body('password').custom((password, {req}) => {
    if (password !== req.body.passwordConfirm) {
      throw new Error('Password confirmation is incorrect');
    }
    return true;
  }),
  body('firstName', 'First and last names cannot be shorter than 2 or longer than 20 characters').isLength({
    min: 2,
    max: 20
  }),
  body('lastName', 'First and last names cannot be shorter than 2 or longer than 20 characters').isLength({
    min: 2,
    max: 20
  }),
  body('userAgree', 'User agreement must be accepted').custom((value) => value),
  validationErrorsHandler
];

const loginValidator = [
  body('email', 'Wrong email format').normalizeEmail().isEmail(),
  body('password').exists(),
  validationErrorsHandler
];

module.exports = {registerValidator, loginValidator};
