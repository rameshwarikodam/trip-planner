const express = require('express');
const router = express.Router();

const tripController = require('../controller/trip.controller');

//get all trips
router.get('/', tripController);
module.exports = router;