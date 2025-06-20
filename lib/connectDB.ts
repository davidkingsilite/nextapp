import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI = process.env.DATABASE_URL as string;

if (!MONGODB_URI) {
  throw new Error('Please define the DATABASE_URL environment variable');
}

// Extend global type
declare global {
  var mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
}

// Ensure it's defined on globalThis
global.mongoose ||= {
  conn: null,
  promise: null,
};

// ✅ This explicit type fixes the error
const cached: {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
} = global.mongoose;

async function connectDB(): Promise<Mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
