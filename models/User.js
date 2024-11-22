import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    fullname: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      
    },
    password: {
      type: String,
      default: "",
    },
    mobile: {
      type: String,
     
    },
    resume: {
      type: String,
      default: "",
    },
    lastworkingday: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true, 
  }
);

const User = model("User", UserSchema);

export default User;
