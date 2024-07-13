import pg from 'pg';
import { Sequelize } from 'sequelize';

// Initialize Sequelize with our PostgreSQL database
let seq = new Sequelize('postgres://localhost:5432/microcart', 
{ 
    dialectModule: pg,
});

// Test the connection to make sure it went well.
try {
    (async () => {
        await seq.authenticate();
        console.log('Connection has been established successfully.');
    })();  
} 
catch (e) {
    console.e('Unable to connect to the Database: ' + e.error);
}

export default seq;