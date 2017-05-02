var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
    username : String,
    restaurant : String,
    address : String,
		website : String,
		number : Number,
    tables : Number,
		booked_times : {}
});

mongoose.model('Restaurants', RestaurantSchema);
