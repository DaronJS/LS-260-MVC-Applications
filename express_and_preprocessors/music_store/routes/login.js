var path = require('path');
var _ = require('underscore');
var Albums = require(path.resolve(path.dirname(__dirname), 'modules/albums.js'));
var passport = require('../app.js')();

module.exports = function(router) {
  router.get('/login', function(req, res) {
    res.render('login');
  });

  router.post('/login', passport.authenticate('local', {
    successRedirect: '/', 
    failureRedirect: '/login'
  }));
}