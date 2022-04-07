const User = require('../models/User');

exports.register = async (req, res, next) => {
  const {username, email, password} = req.body;

  try {
    const user = await User.create({ username, email, password });
    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
}

exports.login = (req, res, next) => {
  res.status(200).json({message: 'login running'});
}

exports.forgotpassword = (req, res, next) => {
  res.status(200).json({message: 'forgot password running'});
}

exports.resetpassword = (req, res, next) => {
  res.status(200).json({message: 'reset password running'});
}

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({success: true, token: token});
}