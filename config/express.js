var config = require('./config'),
  express = require('express');
//var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session'),
  consolidate = require('consolidate')
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
module.exports = function() {
  var app = express();
  //use this code before any route definitions
  //app.use(passport.initialize());
  //app.use(passport.session());
  app.use(bodyParser.json()); // parse application/json
  app.use(bodyParser.json({
    type: 'application/vnd.api+json'
  })); // parse application/vnd.api+json as json
  app.use(bodyParser.urlencoded({
    extended: true
  })); // parse application/x-www-form-urlencoded

  app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
  app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

  app.use(flash());
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: 'OurSuperSecretCookieSecret'
  }));

  require('../app/routes')(app); // pass our application into our routes

  return app;
}
