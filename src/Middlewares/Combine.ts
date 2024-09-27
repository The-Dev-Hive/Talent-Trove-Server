import type { Request, Response, NextFunction } from "express";

type Middleware = (req: Request, res: Response, next: NextFunction) => void;

export const some = (...middlewares: Middleware[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const nextMiddleware = (index: number) => {
      if (index >= middlewares.length) {
        return next();
      }
      const middleware = middlewares[index];
      middleware(req, res, (err) => {
        if (err) return next(err);
        if (res.headersSent) return; // Stop if response has already been sent
        nextMiddleware(index + 1);
      });
    };

    for (const middleware of middlewares) {
      middleware(req, res, (err) => {
        if (!res.headersSent && !err) {
          return next(); // Stop if any middleware succeeds
        }
        nextMiddleware(0);
      });
    }
  };
};

export const every = (...middlewares: Middleware[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const runMiddleware = (index: number) => {
      if (index >= middlewares.length) {
        return next();
      }
      const middleware = middlewares[index];
      middleware(req, res, (err) => {
        if (err) return next(err);
        runMiddleware(index + 1);
      });
    };
    runMiddleware(0);
  };
};

export const except = (
  condition: string | ((req: Request) => boolean),
  ...middlewares: Middleware[]
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const shouldRun =
      typeof condition === "function"
        ? !condition(req)
        : !req.path.startsWith(condition as string);

    if (shouldRun) {
      return every(...middlewares)(req, res, next);
    }
    next();
  };
};
