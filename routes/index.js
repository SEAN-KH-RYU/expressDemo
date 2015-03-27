var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio Home', firstHeadline: "Here's my home page", menuActive:"name" });
});

/* GET about page */
router.get('/about', function(req, res, next) {
  res.render('index', { title: "About Me", firstHeadline: "Example About Me BIO", menuActive:"name" });
});

/* GET contact page */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: "Contact Me", firstHeadline: "Please enter your info",menuActive:"name" });
});

/* GET skills page */
router.get('/skills', function(req, res, next) {
  res.render('index', { title: "Skills", firstHeadline: "Skills page", menuActive:"name" });
});

/* GET products page */
router.get('/products', function(req, res, next) {
  res.render('index', { title: "Products", firstHeadline: "Products page", menuActive:"name" });
});

/* GET education page */
router.get('/services', function(req, res, next) {
  res.render('index', { title: "Services", firstHeadline: "Education page", menuActive:"name" });
});

module.exports = router;
