const crypto = require('crypto');
const sendToken = require('../utils/sendToken');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({ username, email, password });
    res.status(201).json({ success: true, message: "User created success", user: user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Email already exist", error: error });
    next(error);
  }
}

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({ success: false, token: null, message: "Please provide an email and password", user: null });
  }
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).json({ success: false, token: null, message: "No user found, Please Register", user: null });
    }
    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      return res.status(404).json({ success: false, token: null, message: "Invalid Password", user: null });
    }
    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

exports.forgotpassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "No record found, Please provide a correct Email!" });
    const resetToken = await user.getResetPasswordToken();
    await user.save();
    const resetUrl = `http://localhost:3001/reset-password/${resetToken}`;
    const emailMessage = `
    <h1>You have requested a password reset</h1>
    <p>Please make a put request to the following link:</p>
    <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `;
    try {
      await sendEmail({
        to: user.email,
        subject: "Movies Password Reset Request",
        text: emailMessage
      });
      res.status(200).json({ success: true, message: "Email Sent, Please check your Email.", resetToken: resetToken });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save();
      return res.status(500).json({ success: false, message: "Email could not be sent" });
    }
  } catch (error) {
    next(error);
  }
}

exports.resetpassword = async (req, res, next) => {
  const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");
  try {
    const user = await User.findOne({ resetPasswordToken, resetPasswordExpire: { $gt: Date.now() } });
    if (!user) {
      return res.status(400).json({ message: "Please Provide an email, the time has expired!" });
    }
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    res.status(201).json({ success: true, message: "Password Updated Success", token: user.getSignedToken() });
  } catch (error) {
    next(error);
  }
}