const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tripsSchema = new Schema({
  departureLocation: {type: String, required: true},
  arrivalLocation : {type: String, required: true},
  departureDate: {type: Date, required: true},
  arrivalDate: {type: Date, required: true},
  cost: {type: Number, required: true}
}, {
  timestamps: true,
});

const Trip = mongoose.model('Trip', tripsSchema);

module.exports = Trip;
