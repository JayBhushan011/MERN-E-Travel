const express = require("express");
const app = express();
const router = require('express').Router();

var flights = [];
var Amadeus = require('amadeus');
var amadeus = new Amadeus({
  clientId: 'sG1XIWNaEQaIvGVvZxQ72L6JFg2Rf9SB',
  clientSecret: 'uDgqq8eq8YHZ0MVi'
});


router.route("/").post( (req, res) => {
  var originLocation = req.body.originLocation;
  var destinationLocation = req.body.destinationLocation;
  var departureDate = (req.body.departureDate);
  var numberOfAdults = req.body.numberOfAdults;
  var nonStop = (req.body.nonStop === 'true');

  amadeus.shopping.flightOffersSearch.get({
      originLocationCode: originLocation,
      destinationLocationCode: destinationLocation,
      departureDate: departureDate,
      adults: numberOfAdults,
      nonStop: nonStop
  }).then(function(response){
    response.data.forEach(function(object){
      var flight = {
        originLocationCode: object.itineraries[0].segments[0].departure.iataCode,
        destinationLocationCode: destinationLocation,
        numberOfBookableSeats: object.numberOfBookableSeats,
        price: object.price.total,
        numberOfStops: object.itineraries[0].segments.length,
        nonStop: nonStop
      };
      flights.push(flight);
    });
    res.send(flights);
    console.log(flights);
  }).catch(function(responseError){
    res.send(responseError.code);
  });

})

module.exports = router ;
