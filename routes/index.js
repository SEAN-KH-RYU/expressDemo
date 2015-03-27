var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio Home', firstHeadline: "Here's my home page" });
});

/* GET about page */
router.get('/about', function(req, res, next) {
  res.render('index', { title: "About Me", firstHeadline: "Example About Me BIO" });
});

/* GET contact page */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: "Contact Me", firstHeadline: "Please enter your info" });
});

/* GET skills page */
router.get('/skills', function(req, res, next) {
  res.render('index', { title: "Skills", firstHeadline: "Skills page" });
});

/* GET products page */
router.get('/products', function(req, res, next) {
  res.render('index', { title: "Products", firstHeadline: "Products page" });
});

/* GET education page */
router.get('/services', function(req, res, next) {
  res.render('index', { title: "Services", firstHeadline: "Education page" });
});

module.exports = router;
