sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({success: true, token: token, message: `Login Success, Welcome to Movies-Auth App ${user.username}!`, user: user})
}

module.exports = sendToken;