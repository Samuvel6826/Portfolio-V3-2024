var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors'); // Import cors
var multer = require('multer'); // Import multer for file uploads

var indexRouter = require('./routes/index');
var emailRouter = require('./routes/email');

var app = express();

// CORS configuration
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Setup multer for handling file uploads
var upload = multer({ dest: 'uploads/' }); // Uploads stored in 'uploads' directory

// Set up routes
app.use('/', indexRouter);
app.use('/email', upload.array('attachments'), emailRouter); // Apply multer to handle file uploads

module.exports = app;