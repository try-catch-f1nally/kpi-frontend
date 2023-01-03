const User = require('../models/User');
const bcrypt = require('bcryptjs');
const tokenService = require('./token-service');
const ApiError = require('../exceptions/api-error');
const UserDto = require('../dtos/user-dto');

class AuthService {
  async registration(email, password, firstName, lastName) {
    const candidate = await User.findOne({email});
    if (candidate) {
      throw ApiError.BadRequest('User with such email already exists.');
    }

    const passwordHash = bcrypt.hashSync(password, 10);
    const user = await User.create({email, password: passwordHash, firstName, lastName});
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({id: userDto.id});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {...tokens, user: userDto};
  }

  async login(email, password) {
    const user = await User.findOne({email});
    if (!user) {
      throw new ApiError(400, 'Wrong email or password.');
    }

    const passwordsMatch = bcrypt.compareSync(password, user.password);
    if (!passwordsMatch) {
      throw new ApiError(400, 'Wrong email or password.');
    }

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({id: userDto.id});

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {...tokens, user: userDto};
  }

  async logout(refreshToken) {
    const isSuccess = await tokenService.removeToken(refreshToken);
    if (!isSuccess) {
      throw new ApiError(400, 'Unsuccessful log out.');
    }
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }
    const user = await User.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({id: userDto.id});

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {...tokens, user: userDto};
  }
}

module.exports = new AuthService();
