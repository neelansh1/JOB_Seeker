import { User } from "../models/userSchema.js";
import { catchAsyncError } from "./catchAsyncError.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";

<<<<<<< HEAD
export const isAuthorized = catchAsyncError(async (req,res,next) =>{
  const {token} = req.cookies;
  if(!token){
    return next(new ErrorHandler('User Not authorized', 401));
=======
export const isAuthorized = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("User Not Authorized", 401));
>>>>>>> 92f7f966d0da9f32089d248d728617d1e7e1bf34
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  req.user = await User.findById(decoded.id);

  next();
});