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

exports.login = async (req, res, next) => {
  const {email, password} = req.body;
  // const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!email || !password) {
   return  res.status(404).json({success: false, error: "Please provide an email and password"});
  }
  // if (email !== validEmail) {
  //   res.status(404).json({success: false, error: "Please provide a valid email"});
  // }
  try {

    const user = await User.findOne({email}).select("+password");
    if (!user) {
      return res.status(404).json({success: false, error: "Invalid credentials"});
    }
    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      return res.status(404).json({success: false, error: "Invalid credentials"});
    }
    res.status(200).json({success: true, token: 'werwerwer23rwe'});
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

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({success: true, token: token});
}