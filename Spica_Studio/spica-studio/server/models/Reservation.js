const { sql } = require('../db');

class Reservation {
    static async create({ name, phone, date, time, guests }) {
        try {
            const pool = await sql.connect();
            const result = await pool.request()
                .input('name', sql.NVarChar, name)
                .input('phone', sql.NVarChar, phone)
                .input('date', sql.Date, date)
                .input('time', sql.VarChar, time)
                .input('guests', sql.Int, guests)
                .query(`
                    INSERT INTO Reservations (name, phone, date, time, guests, created_at)
                    VALUES (@name, @phone, @date, @time, @guests, GETDATE());
                    SELECT SCOPE_IDENTITY() AS id;
                `);
            return result;
        } catch (err) {
            throw err;
        }
    }

    static async getAll() {
        try {
            const pool = await sql.connect();
            const result = await pool.request().query('SELECT * FROM Reservations ORDER BY date DESC, time DESC');
            return result.recordset;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Reservation;
