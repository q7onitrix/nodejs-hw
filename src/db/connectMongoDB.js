import mongoose from 'mongoose';
import { Note } from '../models/note.js';

export const connectMongoDB = async () => {
  try {
    const MongoURL = process.env.MONGO_URL;
    await mongoose.connect(MongoURL);
    console.log('✅ MongoDB connection established successfully');

    await Note.syncIndexes();
    console.log("✅ Insex sync success");

  } catch(error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }
};
