import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

export const connectDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing mongoose connection!");
      return;
    }

    const db = await mongoose.connect(process.env.MONGODB_URI || "");

    connection.isConnected = db.connections[0].readyState;
    console.log("MONGOOSE CONNECTED!");
  } catch (error) {
    console.log("SOMETHING WENT WRONG!", error);
    process.exit(1);
  }
};
