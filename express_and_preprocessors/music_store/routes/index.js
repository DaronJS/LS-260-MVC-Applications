var path = require('path');
var Albums = require(path.resolve(path.dirname(__dirname), 'modules/albums.js'));

/* GET home page. */
module.exports = function(router) {
  router.get('/', function(req, res, next) {
    if(req.user) {
      res.render('index', { 
        albums: Albums.get(),
      });
    }
    else {
      res.redirect('/login');
    }
  });
}
