import type { Request, Response, NextFunction } from 'express';

export const prettyJsonMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const originalJson = res.json;

  res.json = function (data: unknown) {
    if (req.query.pretty !== undefined) {
      return originalJson.call(this, JSON.stringify(data, null, 2));
    }

    return originalJson.call(this, data);
  };

  next();
};
