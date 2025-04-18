import mongoose from 'mongoose';

export const connectMongoDB = async (req, res, ) => {
  try {
    // Log the MongoDB URI for debugging (ensure it’s safe to log in production)
    console.log('Connecting to MongoDB with URI:', process.env.MONGODB_URI);

    // Connect to MongoDB with options
    await mongoose.connect(process.env.MONGODB_URI, {});

    console.log('Connected to MongoDB');
  } catch (error) {
    // Log the error with detailed information
    console.error('Error connecting to MongoDB:', error.message);
    console.error('Stack trace:', error.stack);
  }
};
