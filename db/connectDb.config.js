import mongoose from "mongoose";

export const connectDB = async (mongoUrl) => {
  try {
    const mongoDBConnection = await mongoose.connect(mongoUrl);
    const host = await mongoDBConnection.connection.host;
    console.log("MongoDB connection established: " + host);
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error.message);
  }
};
