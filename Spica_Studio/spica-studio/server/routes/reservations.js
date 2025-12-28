const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

// POST /api/reservations
router.post('/', reservationController.createReservation);

// GET /api/reservations (Optional, for admin view)
router.get('/', reservationController.getAllReservations);

module.exports = router;
