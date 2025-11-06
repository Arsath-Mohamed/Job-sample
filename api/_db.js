
import mongoose from "mongoose";

const MONGO = process.env.MONGO_URI || process.env.MONGODB_URI;

if (!MONGO) {
  throw new Error("Missing MONGO_URI (or MONGODB_URI) environment variable.");
}

// Global cache across serverless invocations
let cached = global._mongoose;
if (!cached) {
  cached = global._mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO, { })
      .then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
