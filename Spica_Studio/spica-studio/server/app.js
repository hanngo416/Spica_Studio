const express = require('express');
const cors = require('cors');
const path = require('path');
const { connectToDb } = require('./db');
const reservationRoutes = require('./routes/reservations');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Database Connection
connectToDb();

// Routes
app.use('/api/reservations', reservationRoutes);

// Fallback to index.html for SPA-like navigation (if needed, or just static serving)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
