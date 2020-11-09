const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000


app.use(cors());
app.use(express.json());

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


app.get("/", function(request, response) {
  response.send("<h1>Hello World!</h1>");
})

app.listen(5000, function() {
  console.log("Server is running on port " + 5000);
});
