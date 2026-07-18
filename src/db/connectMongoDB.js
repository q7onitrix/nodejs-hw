import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  try {
    const MongoURL = process.env.MONGO_URL;
    await mongoose.connect(MongoURL);
    console.log('✅ MongoDB connection established successfully');
  } catch(error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }
};
