exports.getPrivateData = (req, res, next) => {
  res.status(200).json({success: true, message: "Access to this content"});
}