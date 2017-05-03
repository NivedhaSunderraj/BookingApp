var Manager = require('mongoose').model('Manager'),
  passport = require('passport');
var User = require('mongoose').model('User');
var RegUser = require('mongoose').model('regUsers');
var Restaurant = require('mongoose').model('Restaurants');
var getErrorMessage = function(err) {
  var message = '';
  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = 'Username already exists';
        break;
      default:
        message = 'Something went wrong';
    }
  } else {
    for (var errName in err.errors) {
      if (err.errors[errName].message)
        message = err.errors[errName].message;
    }
  }

  return message;
};
exports.login = function(req, res, next) {
  passport.authenticate('local', function(err, manager, info) {
    if (err || !manager) {
      res.status(400).send(info);
    } else {
      // Remove sensitive data before login
      manager.password = undefined;
      manager.salt = undefined;

      req.login(manager, function(err) {
        if (err) {
          res.status(400).send(err);
        } else {
          res.json(manager);
        }
      });
    }
  })(req, res, next);
};

exports.renderLogin = function(req, res, next) {
  if (!req.user) {
    res.render('login', {
      title: 'Log-in Form',
      messages: req.flash('error') || req.flash('info')
    });
  } else {
    return res.redirect('/');
  }
};

exports.renderRegister = function(req, res, next) {
  if (!req.user) {
    res.render('register', {
      title: 'Register Form',
      messages: req.flash('error')
    });
  } else {
    return res.redirect('/');
  }
};

exports.create = function(req, res, next) {

  var user = new User({
    "username": req.body.username,
    "password": req.body.password,
    "type": req.body.type,
    "provider": "local"
  });
  var type = req.body.type;
  user.save(function(err) {
    if (err) {
      var message = getErrorMessage(err);
      return res.status(400).json({
        "message": message
      });
    }
  });
  var userObj;
  if (type === "user") {
    userObj = new RegUser(req.body);
  } else if (type === "manager") {
    userObj = new Manager(req.body);
    var restaurant = new Restaurant(req.body);
    restaurant.save(function(err) {
      if (err) {
        var message = getErrorMessage(err);
        return res.status(400).json({
          "message": message
        });
      }
    });
  }

  userObj.save(function(err) {
    if (err) {
      var message = getErrorMessage(err);
      return res.status(400).json({
        "message": message
      });
    } else {

      req.login(userObj, function(err) {
        if (err)
          return next(err);

        return res.json(userObj);
      });
      //  res.json("success");
    }
  });
};

exports.logout = function(req, res) {

  req.logOut();

  return res.json({
    "status": "success"
  });
};
