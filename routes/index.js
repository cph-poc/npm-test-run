var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/about', function(req, res) {
  res.render('about', {page:'About Us', menuId:'about'});
});

router.get('/contact', function(req, res) {
  res.render('contact', {page:'Contact Us', menuId:'contact'});
});

module.exports = router;
