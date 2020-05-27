var express = require('express');
var path = require('path');
var logger = require('morgan');
import  index from './routes'
var app = express();
var Morgan = require('morgan');
var passport = require('passport');
var config = require('./config')
var bodyParser =require('body-parser')
var OIDCStrategy = require('passport-azure-ad').OIDCStrategy;
var expressSession = require('express-session');


passport.use(new OIDCStrategy(config.AUTHSTRAYEGY,
function(iss, sub, profile, accessToken, refreshToken, done) {
  return done(null, profile);
}
));
app.use(bodyParser.urlencoded({ extended : true }));

app.use(passport.initialize());
app.use(passport.session());
app.use(expressSession({ secret: 'keyboard cat', resave: true, saveUninitialized: false }));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.use(Morgan(':date> :method :url - {:referrer} => :status (:response-time ms)'));
app.use(Morgan("dev"))

const Routes = index(express, passport);

// set path for static assets
app.use(express.static(path.join(__dirname, 'public')));
// app.use();

// routes
app.use('/', Routes);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.render('error', {status:err.status, message:err.message});
});

module.exports = app;
