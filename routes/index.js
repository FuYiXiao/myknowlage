var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 加载页面模板
  res.render('index', { title: 'Express' });
});

module.exports = router;