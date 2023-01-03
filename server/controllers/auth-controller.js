const authService = require('../services/auth-service');

async function register(req, res, next) {
  try {
    const {email, password, firstName, lastName} = req.body;
    const {refreshToken, ...userData} = await authService.registration(email, password, firstName, lastName);
    res.cookie('refreshToken', refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});

    return res.json(userData);
  } catch (e) {
    next(e);
  }
}

async function login(req, res, next) {
  try {
    const {email, password} = req.body;
    const {refreshToken, ...userData} = await authService.login(email, password);
    res.cookie('refreshToken', refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
    return res.json(userData);
  } catch (e) {
    next(e);
  }
}

async function logout(req, res, next) {
  try {
    const {refreshToken} = req.cookies;
    await authService.logout(refreshToken);
    res.clearCookie('refreshToken');
    return res.json({message: 'Successful.'});
  } catch (e) {
    next(e);
  }
}

async function refresh(req, res, next) {
  try {
    const {refreshToken} = req.cookies;
    const {refreshToken: newRefreshToken, ...userData} = await authService.refresh(refreshToken);
    res.cookie('refreshToken', newRefreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
    return res.json(userData);
  } catch (e) {
    next(e);
  }
}

module.exports = {register, login, logout, refresh};
