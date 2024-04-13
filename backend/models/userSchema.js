import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    minLength: [3, "Name must contain at least 3 characters"],
    maxLength: [30, 'Name cannot exceed 30 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  phone: {
    type: String, // Changed to String
    required: [true, 'Please provide your number'],
  },
  password: {
    type: String,
    required: [true, 'Please provide your password'],
    minLength: [8, "Password must contain at least 8 characters"],
    maxLength: [32, 'Password cannot exceed 32 characters'],
  },
  role: {
    type: String,
    required: [true, 'Please provide your role'],
    enum: ['Job Seeker', 'Employer']
  }, 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hashing the password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Comparing Password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generating a JWT token for authorization
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

export default mongoose.model('User', userSchema);
