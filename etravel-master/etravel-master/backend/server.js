const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 5000


// Middlewear
app.use(bodyParser.urlencoded({ extended : true}));
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
})
);

app.use(express.json());
app.use(session({
  secret: "secretcode",
  resave: true,
  saveUninitialized: true
}));
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

// Mongoose MongoDB Database Setup
require('dotenv').config();
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// *********


const tripRouter = require('./routes/trip');
app.use('/trip', tripRouter);

const userRouter = require('./routes/user');
app.use('/user', userRouter);

const hotelRouter = require('./routes/hotel');
app.use('/hotel', hotelRouter);


app.get("/", function(request, response) {
  response.send("<h1>Hello World!</h1>");
})

app.listen(5000, function() {
  console.log("Server is running on port " + PORT);
});
