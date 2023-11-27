var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/About', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/project/aleph', function(req, res, next) {
  res.render('aleph', { title: 'Express' });
});

router.get('/project/boy-coy', function(req, res, next) {
  res.render('boycoy', { title: 'Express' });
});


router.get('/project/zelt', function(req, res, next) {
  res.render('zelt', { title: 'Express' });
});

router.get('/project/color-combination', function(req, res, next) {
  res.render('color', { title: 'Express' });
});

router.get('/project/miranda', function(req, res, next) {
  res.render('miranda', { title: 'Express' });
});

router.get('/project/this-is-digital', function(req, res, next) {
  res.render('this', { title: 'Express' });
});
module.exports = router;
