const {validationResult} = require('express-validator');
const ApiError = require('../exceptions/api-error');

module.exports = function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(ApiError.BadRequest('Incorrect data: ' + errors.array().map(err => err.msg).join(', ') + '.'));
  }
  next();
};
