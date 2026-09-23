import mongoose from "mongoose";

const connect = async () => {
  // reuse the open connection across requests instead of reconnecting each time
  if (mongoose.connection.readyState === 1) return;

  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error("MONGO_URI is not set");

  try {
    await mongoose.connect(uri);
  } catch (error) {
    throw new Error("Connection failed: " + error);
  }
};

export default connect;
