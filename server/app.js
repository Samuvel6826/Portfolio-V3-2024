require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors'); // Import CORS

// Import routes and middleware
const indexRouter = require('./routes/index');
const projectRoutes = require('./routes/projectRoutes');
const skillRoutes = require('./routes/skillRoutes');
const { errorHandlerMiddleware } = require('./middlewares/errorHandlers'); // Import error handler

// Import the database connection file (not the contents directly)
const connectToDatabase = require('./configs/mongoDBconfig.js');

var app = express();

// CORS configuration
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Allow cookies to be sent with requests
}));

// Continue setting up the app after database connection
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', indexRouter);
app.use('/projects', projectRoutes);  // Mount project routes at /projects
app.use('/skills', skillRoutes);      // Mount skill routes at /skills

// Global error handler
app.use(errorHandlerMiddleware);

// Call the function to connect to the database
connectToDatabase();

module.exports = app;