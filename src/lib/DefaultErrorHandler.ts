import type { Request, Response, NextFunction } from 'express';

// Default Error Handler
export const defaultErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err.stack);

  res.status(500).json({
    message: 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' ? { error: err.message } : {}),
  });
};
