import { RequestHandler } from "express";

const registerUserIntoDB: RequestHandler = async (req, res, next) => {
  const userData = req.body;
  res.status(201).json({ success: true, data: userData });
};

export const AuthController = {
  registerUserIntoDB,
};
