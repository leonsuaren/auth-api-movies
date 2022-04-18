const express = require('express');
const router = express.Router();
const { getPrivateData } = require('../controllers/private');
const { protect } = require('../middleware/auth');

router.route('/').get(protect, getPrivateData);
router.route('/user-data').get(protect, (req, res, next)=> {
  res.status(200).json({message: 'User data', username: 'Leon'});
})

module.exports = router;