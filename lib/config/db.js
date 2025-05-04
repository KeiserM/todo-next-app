import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://username:Password@cluster0.xpaacgx.mongodb.net/todo-app"
  );
  console.log("Connected to DB");
};
