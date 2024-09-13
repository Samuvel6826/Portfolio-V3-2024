const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

// Fetch environment variables
const username = process.env.USER_NAME;
const password = process.env.APP_PASSWORD;

if (!username || !password) {
    console.error('Error: Missing environment variables for email credentials.');
    process.exit(1); // Stop server if credentials are missing
}

// Create a transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: username,
        pass: password,
    },
    debug: true, // Enable debug mode for detailed logs (disable in production)
});

// Constants for validation
const MAX_ATTACHMENT_SIZE_MB = 10; // Maximum size of each attachment in MB
const MAX_ATTACHMENTS = 10; // Maximum number of attachments

// Validate email format
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Validate attachment size
const validateAttachments = (files) => {
    if (files.length > MAX_ATTACHMENTS) {
        return `You can only upload up to ${MAX_ATTACHMENTS} attachments.`;
    }

    for (const file of files) {
        if (file.size > MAX_ATTACHMENT_SIZE_MB * 1024 * 1024) { // Convert MB to bytes
            return `Attachment ${file.originalname} exceeds the maximum size of ${MAX_ATTACHMENT_SIZE_MB}MB.`;
        }
    }
    return null;
};

// Send email function
const sendEmail = async (req, res) => {
    const { name, subject, email, message } = req.body;

    try {
        // Handle attachments
        const files = req.files || [];
        const validationError = validateAttachments(files);

        if (validationError) {
            return res.status(400).send(validationError);
        }

        const attachments = files.map(file => ({
            filename: file.originalname,
            path: file.path,
            contentType: file.mimetype
        }));

        // Construct email content
        const emailContent = `
            <p><strong>From Name:</strong> ${name}</p>
            <p><strong>From Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `;

        const info = await transporter.sendMail({
            from: {
                name: `SamToCode24 - ${name}`,
                address: username // Your email address
            },
            to: `"samuvel6826@gmail.com", ${email}`, // Change to the recipient email address
            subject: subject,
            text: message, // Plain text body
            html: emailContent, // HTML body
            attachments: attachments, // Attach files if available
        });

        console.log(`Message sent: ${info.messageId}`);
        res.status(200).send(`Email sent successfully with message ID: ${info.messageId}`);
    } catch (error) {
        console.error('Error in sending email:', error.message);
        res.status(500).send(`Failed to send email: ${error.message}`);
    }
};

module.exports = { sendEmail };