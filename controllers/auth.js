exports.register = (req, res, next) => {
  res.status(200).json({message: 'register running'});
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