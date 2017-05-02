var Rest = require('mongoose').model('Restaurants');
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
    }
    else {
        for (var errName in err.errors) {
            if (err.errors[errName].message)
                message = err.errors[errName].message;
        }
    }

    return message;
};

exports.list = function(req, res, next) {
    Rest.find({}, function(err, restaurants) {
        if (err) {
          var message = getErrorMessage(err);
          return res.status(400).json({
      "message":message
    });
        }
        else {
            res.json(restaurants);
        }
    });
};
