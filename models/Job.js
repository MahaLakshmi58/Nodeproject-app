import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const JobSchema = new Schema(
  {
    CityName: {
      type: String,
      required: true,
      trim: true,
    },
    Technologies: {
      type: String,
      required: true,
      trim: true,
    },
    CompanyName: {
      type: String,
      required: true,
      trim: true
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
  },
  {
    timestamps: true,
  }
);

const Job = model('Job', JobSchema);

export default Job;
