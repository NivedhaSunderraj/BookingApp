var users = require('./controllers/users.server.controller');
var manager = require('./controllers/manager.server.controller');
var restaurant = require('./controllers/restaurant.server.controller');
module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  // frontend routes =========================================================
  // route to handle all angular requests
  app.route('/list').get(restaurant.list);
  app.route('/manRegister').post(manager.create);
  app.route('/manLogin').post(manager.login);
  app.route('/logoutUser').get(manager.logout);
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });


};
