const express = require('express');
const router = express.Router();
const { sql } = require('../db');

// POST /api/reservations
router.post('/', async (req, res) => {
    const { name, phone, date, time, guests } = req.body;

    if (!name || !phone || !date || !time || !guests) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const pool = await sql.connect();
        // Ensure table exists (simple check for dev/demo)
        // ideally this is done in a migration script

        // Insert into DB
        await pool.request()
            .input('name', sql.NVarChar, name)
            .input('phone', sql.NVarChar, phone)
            .input('date', sql.Date, date)
            .input('time', sql.VarChar, time) // Keeping time as string for simplicity or sql.Time
            .input('guests', sql.Int, guests)
            .query(`
                INSERT INTO Reservations (name, phone, date, time, guests, created_at)
                VALUES (@name, @phone, @date, @time, @guests, GETDATE())
            `);

        res.status(201).json({ message: 'Reservation created successfully' });
    } catch (err) {
        console.error('Error creating reservation:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

module.exports = router;
