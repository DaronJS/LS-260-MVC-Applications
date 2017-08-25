var path = require('path');
var Albums = require(path.resolve(path.dirname(__dirname), 'modules/albums.js'));

/* GET home page. */
module.exports = function(router) {
  router.get('/admin', function(req, res, next) {
    res.render('admin');
  });
}