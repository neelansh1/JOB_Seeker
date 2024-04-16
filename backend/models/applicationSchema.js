import mongoose from 'mongoose';
import validator from 'validator';

const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    minLength: [3, 'Name must contain at least 3 characters'],
    maxLength: [30, 'Name cannot contain more than 30 characters'],
  },
  email: {
    type: String,
    validate: [validator.isEmail, 'Please provide a valid email address'],
    required: [true, 'Please provide your email'],
  },
  phone: {
    type: String,
    required: [true, 'Please provide your phone number'],
    // You might want to add a validator for phone number format here
  },
  address: {
    type: String,
    required: [true, 'Please provide your address'],
  },
  coverLetter: {
    type: String,
    required: [true, 'Please provide your cover letter'],
    // You might want to add additional validations here
  },
  resume: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  applicantID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  employerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
});

export const Application = mongoose.model("Application", applicationSchema);
