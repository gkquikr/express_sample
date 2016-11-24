var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    title: 'Welcome to Quikr SME Platform'
  });
});

router.get('/about', function(req, res){
  res.render('about', {
    title: 'Know more about Quikr SME Platform'
  });
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact Us'
  });
});

module.exports = router;