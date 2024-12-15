// configs/mongoDBconfig.js
const mongoose = require('mongoose');
const customLogger = require('../utils/customLogger'); // Import the custom logger

const connectToDatabase = async () => {
    // Ensure that MongoDB URL and Name are defined
    const dbUrl = process.env.MONGODB_URL;
    const dbName = process.env.MONGODB_NAME;

    if (!dbUrl || !dbName) {
        customLogger.logError(new Error('Database URL or Database Name is missing in environment variables'));
        return false;
    }

    const fullDbUrl = `${dbUrl}/${dbName}`;

    try {
        // Attempt to connect to the database
        await mongoose.connect(fullDbUrl);
        customLogger.info('Connected to MERN-Portfolio-2024 MongoDB Database Successfully');

        // Set up connection error handler
        mongoose.connection.on('error', (error) => {
            customLogger.logError(error, { context: 'MongoDB connection error' });
        });

        // Set up disconnection handler
        mongoose.connection.on('disconnected', () => {
            customLogger.warn('MongoDB disconnected');
        });

        // Graceful shutdown
        process.on('SIGINT', async () => {
            await mongoose.connection.close();
            customLogger.info('MongoDB connection closed due to application termination');
            process.exit(0);
        });

        return true; // Connection successful
    }
    catch (error) {
        customLogger.logError(error, { context: 'Error connecting to MongoDB' });
        return false; // Connection failed
    }
};

module.exports = connectToDatabase;