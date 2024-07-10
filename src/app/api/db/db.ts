import mongoose, { ConnectOptions, Mongoose } from 'mongoose';

// MongoDB URI from environment variable (you can replace with your actual URI)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cachedConnection: Mongoose | null = null;

async function connectToDatabase(): Promise<Mongoose> {
  if (cachedConnection) {
    console.log('Using existing database connection');
    return cachedConnection;
  }

  try {
    const connection = await mongoose.connect(MONGODB_URI);
    cachedConnection = connection;
    console.log('New database connection established');
    return cachedConnection;
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}

const dbConnection = async()=> await connectToDatabase();

export default dbConnection;
