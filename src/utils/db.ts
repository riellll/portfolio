import mongoose from "mongoose";

const connect = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("MONGO_URI is not set");
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw new Error("Connection Faild:" + error);
  }
};

export default connect;
