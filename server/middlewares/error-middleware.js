const ApiError = require('../exceptions/api-error');

module.exports = function (err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({message: err.message});
  }

  console.log('Unexpected error:', err);
  return res.status(500).json({message: 'Something went wrong, please try again later'});
};
