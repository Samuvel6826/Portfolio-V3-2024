// routes/router.js

import express from 'express';
import * as razorpayController from '../controller/razorpay.js';

const router = express.Router();

router.get('/get-payment', razorpayController.getPayment);
router.post('/order', razorpayController.createOrder);
router.post('/verify', razorpayController.verifyPayment);

export default router;