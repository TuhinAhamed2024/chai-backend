import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../config/config";
const userSchema = new Schema(
  {
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    userName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
      index: true,
    },
    fullName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String, //? url comes from cloudinary
      required: true,
    },
    coverImage: {
      type: String, //? url comes from cloudinary
      required: true,
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
// ? hash password and store in the database
userSchema.pre("save", async function (next: any) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  const hashPassword = await bcrypt.hash(user.password, 10);
  user.password = hashPassword;
});
// compare password during login
userSchema.methods.isPasswordCorrect = async function (password: any) {
  const user = this;
  const ComparePassword = await bcrypt.compare(password, user.password);
  return ComparePassword;
};
// ?generateAccessToken
userSchema.methods.generateAccessToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
      userName: this.userName,
      email: this.email,
      password: this.password,
    },
    config.access_token_secret,
    {
      expiresIn: config.access_token_expiry,
    }
  );
};
userSchema.methods.generateRefreshToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    config.refresh_token_secret,
    {
      expiresIn: config.refresh_token_expiry,
    }
  );
};
export const User = model("User", userSchema);
