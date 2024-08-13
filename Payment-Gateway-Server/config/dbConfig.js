import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(`${process.env.dbUrl}/${process.env.dbName}`);
    console.log('\n---*** Razorpay Payment Gateway Integration Database Connected Successfully ***---');
  } catch (error) {
    console.error('\nError connecting to Razorpay MongoDB:', error.message);
  }
};

// Export the connectToDatabase function
export default connectToDatabase;