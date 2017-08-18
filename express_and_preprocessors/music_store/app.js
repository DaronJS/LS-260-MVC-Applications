var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session')
var stylus = require('stylus');
var nib = require('nib');

var passport = require('passport');
module.exports = () => passport;
var passportLocal = require('passport-local');

var app = express();


// routes
var routes = require('./routes/all');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(stylus.middleware({
  src: path.join(__dirname, 'public'),
  compile: function(str, p) {
    return stylus(str).set('filename', p).use(nib());
  }
}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({ 
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false
}))
app.use(express.static(path.join(__dirname, 'public')));

//authentication
app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportLocal.Strategy(function(username, password, done){
  //pretend this is using a database
  if(username === password) { // match input to data on database
    return done(null, {id: username, name: username });
  }else { // in case of fail
    return done(null, null);
  }
}));

passport.serializeUser(function(user, done) {
  done(null, user.id)
});

passport.deserializeUser(function(id, done) {
  //query the database or cache here
  done({id: id, name: id}) // this will be a real db query
})

app.use('/', routes);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.locals.basedir = path.join(__dirname, 'views');

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
