const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = mongoose.Schema({
    name: String,
    type: String,
    price: String,
    image: String
})

module.exports = mongoose.model('Restaurant', RestaurantSchema);