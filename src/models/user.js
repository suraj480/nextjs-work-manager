import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: [true, "Email is required!!"],
  },
  password: {
    type: String,
    require: [true, "Password is required!!"],
  },
  about:String,
  profileURL:String
});

export const User = mongoose.models.users || mongoose.model("users",UserSchema)