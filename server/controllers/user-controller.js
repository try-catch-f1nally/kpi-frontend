const userService = require('../services/user-service');

async function editUserInfo(req, res, next) {
  try {
    const {firstName, lastName, email} = req.body;
    const userData = await userService.editInfo(req.user.id, firstName, lastName, email);
    res.json(userData);
  } catch (e) {
    next(e);
  }

}

async function changePassword(req, res, next) {
  try {
    const {oldPassword, password} = req.body;
    await userService.changePassword(req.user.id, oldPassword, password);
    res.json({message: 'Password changed successfully'});
  } catch (e) {
    next(e);
  }
}

module.exports = {editUserInfo, changePassword};
