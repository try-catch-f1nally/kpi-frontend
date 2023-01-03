module.exports = class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }

  static UnauthorizedError() {
    return new ApiError(401, 'Unauthorized error');
  }

  static BadRequest(message, errors = []) {
    return new ApiError(400, message);
  }
};
