import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(`${process.env.dbUrl}/${process.env.dbName}`);
    console.log('\n---*** MongoDB Database Connected Successfully Via Mongoose ***---\n');
  } catch (error) {
    console.error('\nError connecting to MongoDB:', error.message);
  }
};

// Export the connectToDatabase function
export default connectToDatabase;