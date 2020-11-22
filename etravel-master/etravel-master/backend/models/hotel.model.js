const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Connect to mongoDB
// mongoose.connect("mongodb+srv://user01:user01@cluster0.lvjps.mongodb.net/hotelData?retryWrites=true&w=majority/hotelData", {useNewUrlParser: true, useUnifiedTopology: true});
//
// const connection = mongoose.createConnection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })

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
