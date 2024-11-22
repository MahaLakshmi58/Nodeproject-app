import mongoose from "mongoose";

const { Schema, model } = mongoose;

const CustomerSchema = new Schema(
  {
    CustomerName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String
    },
    Technologies: {
      type: String,
      required: true,
      trim: true,
    },
    CityName: {
      type: String,
      required: true,
      trim: true,
    },
    CompanyName: {
      type: String,
      required: true,
      trim: true,
    },
    Experience: {
      type: Number,
      required: true,
      min: 0,
    },
    immediatejoiner: {
      type: String,
      required: true
    },
    Location: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Customer = model("applyjobs", CustomerSchema);

export default Customer;
