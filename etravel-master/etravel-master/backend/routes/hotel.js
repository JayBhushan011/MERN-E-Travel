const router = require('express').Router();
let Hotel = require('../models/hotel.model')

var searchParameters;

var location = "New Delhi";  // DEFAULT VALUES
var country = "India";
var minRating =  0;
var maxPrice = 1000000000000000;

var searchParameters = {
  "location" : location,
  "country" : country,
  "rating" : {$gte: minRating},
  "price" : {$lte: maxPrice }
};

router.route('/').get((req, res) => {
  Hotel.find()
    .then(hotels => res.json(hotels))
    .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/search').post((req,res) => {
  var location = req.body.location;
  var country = req.body.country;
  var minRating = parseFloat(req.body.minRating);
  var inputMaxPrice = Number(req.body.maxPrice);

  if (req.body.maxPrice){
    searchParameters = {
      "location" : location,
      "country" : country,
      "rating" : {$gte: minRating},
      "price" : {$lte: inputMaxPrice }
    };
  }
  else{
    searchParameters = {
      "location" : location,
      "country" : country,
      "rating" : {$gte: minRating},
      "price" : {$lte: maxPrice }
    };
  }

  console.log(searchParameters);

  res.redirect("/hotel/results")
});

router.route('/results').get((req, res) => {
  Hotel.find(searchParameters)
    .then(hotels => res.json(hotels))
    .catch(err => res.status(400).json('Error : ' + err));
});

module.exports = router;
