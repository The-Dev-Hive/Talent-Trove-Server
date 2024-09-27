import type { Request, Response, NextFunction } from "express";

// Not Found Handler
export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(404).json({
    message: "Resource not found",
  });
};
