import mongoose from 'mongoose';

// Payment Schema
const PaymentSchema = new mongoose.Schema({
    razorpay_order_id: {
        type: String,
        required: true,
    },
    razorpay_payment_id: {
        type: String,
        required: true,
    },
    razorpay_signature: {
        type: String,
        required: true,
    },
    date_time: {
        type: String
    }
},
    { versionKey: false }
);

// Razorpay Model
const razorpayModel = mongoose.model('razorpay_payments', PaymentSchema);

// Export the Razorpay Model as the default export
export default razorpayModel;