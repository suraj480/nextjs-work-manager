import mongoose from "mongoose";
export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "nextjs_work_manager",
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      family: 4,
    });
    console.log("db connected...");
    console.log(connection);
  } catch (error) {
    console.log("failed to connect with database");
    console.log(error);
  }
};
