sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({success: true, token: token, message: 'Access Confirmed!'});
}

module.exports = sendToken;