var express = require('express');
var router = express.Router();

/* GET API status. */
router.get('/', function(req, res, next) {
  res.json({
    success: true,
    message: 'Uni-Co CMS API is running',
    version: '1.0.0'
  });
});

module.exports = router;
