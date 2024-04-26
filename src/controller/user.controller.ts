import { NextFunction, Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import createHttpError from "http-errors";

const register = asyncHandler(async(req:Request,res:Response,next:NextFunction)=>{
  try {
    res.status(200).json({
      message:"welcome to the registration page"
    })
  } catch (error) {
    createHttpError(500,"Can't reach registration page")
  }
})
export {register};