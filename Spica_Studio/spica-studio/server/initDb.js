const { sql, connectToDb } = require('./db');

async function initializeDatabase() {
    try {
        await connectToDb();
        const pool = sql; // Use the global connection established by connectToDb

        console.log('Checking database schema...');

        // Check if Reservations table exists
        const result = await pool.request().query(`
            IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Reservations' and xtype='U')
            BEGIN
                CREATE TABLE Reservations (
                    id INT IDENTITY(1,1) PRIMARY KEY,
                    name NVARCHAR(100) NOT NULL,
                    phone NVARCHAR(20) NOT NULL,
                    date DATE NOT NULL,
                    time NVARCHAR(10) NOT NULL,
                    guests INT NOT NULL,
                    created_at DATETIME DEFAULT GETDATE()
                )
                PRINT 'Reservations table created'
            END
            ELSE
            BEGIN
                PRINT 'Reservations table already exists'
            END
        `);

        console.log('Database initialization completed.');
        process.exit(0);
    } catch (err) {
        console.error('Database initialization failed:', err);
        process.exit(1);
    }
}

initializeDatabase();
