const router = require('express').Router();
let Trip = require('../models/trip.model')

router.route('/').get((req, res) => {
  Trip.find()
    .then(trips => res.json(trips))
    .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/add').post((req,res) => {
  const departureLocation = req.body.departureLocation;
  const arrivalLocation = req.body.arrivalLocation;
  const departureDate = Date.parse(req.body.departureDate);
  const arrivalDate = Date.parse(req.body.arrivalDate);
  const cost = Number(req.body.cost);

  const newTrip = new Trip({
    departureLocation,
    arrivalLocation,
    departureDate,
    arrivalDate,
    cost
  });

  newTrip.save()
  .then(() => res.json("Trip added!"))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
