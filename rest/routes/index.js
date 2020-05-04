const express = require('express');
const router = express.Router();

const vehiclesController = require('../controllers/vehiclesController');

/**
 * @route GET /vehicles
 * @group Vehicle
 * @summary Get all Vehicles
 * @returns {object} 200 - Found Vehicles
 * @returns {Error}  default - Unexpected error
 */
router.get('/vehicles', vehiclesController.getAllVehicles);
/**
 * @route GET /vehicle/{id}
 * @group Vehicle
 * @summary Get a Vehicle
 * @param {string} id.path.required  - Id of a Vehicle
 * @returns {object} 200 - Found Vehicle
 * @returns {Error}  default - Unexpected error
 */
router.get('/vehicle/:id', vehiclesController.getAVehicles);

module.exports = router;
