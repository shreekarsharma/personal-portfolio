import mongoose from "mongoose";
import dns from "dns";

const connectDB = async () => {
  try {
    dns.setServers(["8.8.8.8", "8.8.4.4"]);
    dns.setDefaultResultOrder("ipv4first");

    const conn = await mongoose.connect(
      process.env.MONGO_URI
    );

    console.log(
      `MongoDB Connected: ${conn.connection.host}`
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;