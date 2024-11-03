import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err.stack);
  res.status(500).send({
    status: "error",
    message: err?.message || "Internal Server Error!",
    data: null,
    errors: err,
  });
};
