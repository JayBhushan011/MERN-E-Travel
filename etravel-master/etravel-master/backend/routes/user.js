const router = require('express').Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
let User = require('../models/user.model');

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
        console.log(req.user);
      });
    }
  })(req, res);
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
