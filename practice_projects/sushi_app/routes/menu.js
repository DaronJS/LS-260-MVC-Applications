var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();
var file_path = path.resolve(path.dirname(__dirname), 'data/menu_items.json');
var sushiData = JSON.parse(fs.readFileSync(file_path, 'utf8'));

/* GET home page. */
router.get('/menu', function(req, res, next) {
  res.render('menu', { 
    title: 'Sushi',
    data:  sushiData.data,
  });
});

module.exports = router;
