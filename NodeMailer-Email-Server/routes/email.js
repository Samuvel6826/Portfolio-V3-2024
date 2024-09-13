// routes/email.js

const express = require('express');
const router = express.Router();
const { sendEmail } = require('../controllers/emailController'); // Correctly import sendEmail

// Define route to send email
router.post('/send-email', sendEmail);

module.exports = router;