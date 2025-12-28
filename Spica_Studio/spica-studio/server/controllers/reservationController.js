const Reservation = require('../models/Reservation');

exports.createReservation = async (req, res) => {
    const { name, phone, date, time, guests } = req.body;

    if (!name || !phone || !date || !time || !guests) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        await Reservation.create({ name, phone, date, time, guests });
        res.status(201).json({ message: 'Reservation created successfully' });
    } catch (err) {
        console.error('Error creating reservation:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.getAll();
        res.status(200).json(reservations);
    } catch (err) {
        console.error('Error fetching reservations:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
