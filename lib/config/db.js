import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://keiserM:8N1T0j0vKCAphsbo@cluster0.xpaacgx.mongodb.net/todo-app"
  );
  console.log("Connected to DB");
};
