const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const hotelSchema = new Schema({
  name: {type: String, required: true},
  country: {type: String, required: true},
  location : {type: String, required: true},
  address : {type: String, required: true},
  price: {type: Number, required: true},
  rating: {type: Number, required: true},
  imgurl : {type: String, required: true},
}, {
  timestamps: true,
});

const Hotel = mongoose.model('Hotel', hotelSchema, 'hotel');

module.exports = Hotel;
