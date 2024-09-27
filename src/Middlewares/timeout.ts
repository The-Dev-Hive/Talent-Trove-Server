import type { Request, Response, NextFunction } from "express";

interface TimeoutMiddlewareOptions {
  timeout: number; // Timeout duration in milliseconds
  errorMessage?: string; // Custom error message for timeout
}

export const timeoutMiddleware = (options: TimeoutMiddlewareOptions) => {
  const { timeout, errorMessage = "Request timed out" } = options;

  return (req: Request, res: Response, next: NextFunction) => {
    // Set a timeout on the response
    const timeoutId = setTimeout(() => {
      // If the response is not already sent, send the timeout error
      if (!res.headersSent) {
        res.status(408).json({ error: errorMessage });
      }
    }, timeout);

    // Clear the timeout if the response is sent before the timeout duration
    res.on("finish", () => {
      clearTimeout(timeoutId);
    });

    next();
  };
};
