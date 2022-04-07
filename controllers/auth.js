const sendToken = require('../utils/sendToken');
const User = require('../models/User');

exports.register = async (req, res, next) => {
  const {username, email, password} = req.body;

  try {
    const user = await User.create({ username, email, password });
    // sendToken(user, 201, res);
    res.status(201).json({success: true, message: "User created success", user: user});
  } catch (error) {
    next(error);
  }
}

exports.login = async (req, res, next) => {
  const {email, password} = req.body;
  if (!email || !password) {
   return  res.status(404).json({success: false, error: "Please provide an email and password"});
  }
  try {
    const user = await User.findOne({email}).select("+password");
    if (!user) {
      return res.status(404).json({success: false, error: "Invalid credentials"});
    }
    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      return res.status(404).json({success: false, error: "Invalid credentials"});
    }
    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({success: false, error: error.message});
  }
}

exports.forgotpassword = (req, res, next) => {
  res.status(200).json({message: 'forgot password running'});
}

exports.resetpassword = (req, res, next) => {
  res.status(200).json({message: 'reset password running'});
}