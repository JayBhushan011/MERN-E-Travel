const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6
  },
  fName: String,
  lName: String,
  gender : String,
  dateOfBirth : Date,
  add1: String,
  add2: String,
  city: String,
  state: String,
  zcode: Number,
  mobile: Number,
  email: String,
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
