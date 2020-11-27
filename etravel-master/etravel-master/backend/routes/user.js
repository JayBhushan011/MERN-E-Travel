const router = require('express').Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
let User = require('../models/user.model');
let Hotel = require('../models/hotel.model');
var theUser;
var hotels = [];

router.route('/get').get((req, res) => {
  res.send(req.user);
});

router.route("/login").post((req, res) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        theUser = req.user;
      });
    }
  })(req, res);
});

router.route('/checkLogIn').get((req, res) => {
  if (req.user) {
      const whichUser = req.user;
      User.findOne(whichUser, function(err, object){
        res.send(object);
      });
  } else {
    res.send("Please Log In");
  }
});

router.route('/bookingHistory').get((req, res) => {

          User.findOne({username : theUser.username}, function(err, object){
            var hotelsBooked = object.hotelsBooked;
            console.log(hotelsBooked);
            hotelsBooked.forEach( function(value){
              var id;
              id = String(value)
              console.log(id)
              Hotel.findById(String(id), function(err,hotel){


                hotels.push(hotel);
                console.log(hotel);
              });
            });
            res.send(hotels);

            });


      });

router.route('/addToHistory').post((req, res) => {

      const hotelBooked = req.body.hotelBooked;


          User.findOne({username : theUser.username}, function(err, object){
            console.log(object);
            object.hotelsBooked.push(hotelBooked);
            object.save();
            });


      });

router.route('/add').post((req, res) => {
  const username = req.body.username;
  var password = req.body.password;
  const fName = req.body.fName;
  const lName = req.body.lName;
  const gender = req.body.gender;
  const dateOfBirth = Date.parse(req.body.dob);
  const add1 = req.body.add1;
  const add2 = req.body.add2;
  const city = req.body.city;
  const state = req.body.state;
  const zcode = Number(req.body.zcode);
  const mobile = Number(req.body.mobile);
  const email = req.body.email;

  User.findOne({
    username: username
  }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {

      const hashedPassword = await bcrypt.hash(password,10);
      password = hashedPassword;

      const newUser = new User({
        username,
        password,
        fName,
        lName,
        gender,
        dateOfBirth,
        add1,
        add2,
        city,
        state,
        zcode,
        mobile,
        email,
      });
      newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
  });
});





module.exports = router;
