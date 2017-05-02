var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db);
    require('../app/models/user.server.model');
    require('../app/models/manager.server.model');
    require('../app/models/regUsers.server.model');
    require('../app/models/restaurants.server.model');
    return db;
};
