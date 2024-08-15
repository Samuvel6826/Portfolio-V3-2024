import Razorpay from 'razorpay';
import razorpayModel from '../model/razorpay.js';
import crypto from 'crypto';
import dayjs from 'dayjs';
import { isString, isNumber } from '../common/Sanitize.js';
import logger from '../common/logger.js';  // Import the logger

// Destructure environment variables
const { RAZORPAY_KEY_ID, RAZORPAY_SECRET } = process.env;

// Initialize Razorpay instance with environment variables
const razorpayInstance = new Razorpay({
    key_id: RAZORPAY_KEY_ID,
    key_secret: RAZORPAY_SECRET,
});

// Function to handle client errors
const handleClientError = (res, message) => {
    logger.warn(`Client error: ${message}`); // Log the client error
    res.status(400).send({ message });
};

// Function to handle server errors
const handleServerError = (res, error) => {
    logger.error(`Server error: ${error.message}`); // Log the server error
    res.status(500).send({
        message: 'Internal Server Error',
        errorMessage: error.message,
    });
};

// Endpoint to retrieve payment details
const getPayment = async (req, res) => {
    // Respond with a simple message for payment details endpoint
    res.json("Payment Details");
    logger.info('Payment details retrieved'); // Log the retrieval
};

// Endpoint to create a new payment order
const createOrder = async (req, res) => {
    try {
        let { amount } = req.body;

        // Sanitize and validate amount
        amount = isNumber(amount);

        if (amount <= 0) {
            return handleClientError(res, 'Invalid amount');
        }

        // Prepare options for creating Razorpay order
        const options = {
            amount: amount * 100, // Amount in paise
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex"),
        };

        // Create order using Razorpay API
        razorpayInstance.orders.create(options, (error, order) => {
            if (error) {
                logger.error('Razorpay order creation error:', error);
                return handleServerError(res, error);
            }
            res.status(200).json({ data: order });
            logger.info('Razorpay order created:', order); // Log the successful order creation
        });
    } catch (error) {
        logger.error('Internal server error:', error);
        handleServerError(res, error);
    }
};

// Endpoint to verify payment signature
const verifyPayment = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    try {
        // Sanitize inputs
        const sanitizedOrderId = isString(razorpay_order_id);
        const sanitizedPaymentId = isString(razorpay_payment_id);
        const sanitizedSignature = isString(razorpay_signature);

        if (!sanitizedOrderId || !sanitizedPaymentId || !sanitizedSignature) {
            return handleClientError(res, 'Invalid input data');
        }

        // Check if the secret is undefined
        if (!RAZORPAY_SECRET) {
            logger.error('Razorpay secret key is undefined');
            return res.status(500).json({ message: 'Internal Server Error!' });
        }

        // Create sign
        const sign = `${sanitizedOrderId}|${sanitizedPaymentId}`;

        // Create expectedSign using HMAC with SHA-256
        const expectedSign = crypto.createHmac('sha256', RAZORPAY_SECRET)
            .update(sign.toString())
            .digest('hex');

        // Verify if the signatures match
        const isAuthentic = expectedSign === sanitizedSignature;

        // Handle the result of signature verification
        if (isAuthentic) {
            // Save payment details to the database
            const payment = new razorpayModel({
                razorpay_order_id: sanitizedOrderId,
                razorpay_payment_id: sanitizedPaymentId,
                razorpay_signature: sanitizedSignature,
                date_time: dayjs().format('dddd, MMMM D, YYYY h:mm A')
            });
            await payment.save();

            // Log the successful payment
            logger.info(`Payment verified and saved: ${sanitizedPaymentId}`);

            // Send success message along with date_time
            res.json({ message: 'Payment Successful', date_time: payment.date_time });
        } else {
            // Log the invalid signature attempt
            logger.warn('Invalid Signature');
            res.status(400).json({ message: 'Invalid Signature' });
        }
    } catch (error) {
        logger.error('Internal server error:', error);
        res.status(500).json({ message: 'Internal Server Error!' });
    }
};

// Export all functions together
export {
    getPayment,
    createOrder,
    verifyPayment
};