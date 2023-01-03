const jwt = require('jsonwebtoken');
const Token = require('../models/Token');

class TokenService {
  generateTokens(payload) {
    return {
      accessToken: jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'}),
      refreshToken: jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})
    };
  }

  validateAccessToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_ACCESS_SECRET); // returns user data
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_REFRESH_SECRET); // returns user data
    } catch (e) {
      return null;
    }
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await Token.findOne({user: userId});
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      await tokenData.save();
    } else {
      await Token.create({user: userId, refreshToken});
    }
  }

  async removeToken(refreshToken) {
    const {deletedCount} = await Token.deleteOne({refreshToken});
    return !!deletedCount;
  }

  async findToken(refreshToken) {
    return Token.findOne({refreshToken});
  }
}

module.exports = new TokenService();
