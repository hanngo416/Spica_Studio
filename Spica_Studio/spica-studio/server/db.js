const sql = require('mssql');
require('dotenv').config();

const config = {
    server: process.env.DB_SERVER || 'localhost',
    database: process.env.DB_DATABASE,
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true
    }
};

async function connectToDb() {
    try {
        await sql.connect(config);
        console.log('Connected to SQL Server');
    } catch (err) {
        console.error('Database connection failed:', err);
        throw err; // Propagate error to caller
    }
}

module.exports = {
    connectToDb,
    sql
};
