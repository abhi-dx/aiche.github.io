var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pollufic', { title: 'Data Sampling' });
});

module.exports = router;
