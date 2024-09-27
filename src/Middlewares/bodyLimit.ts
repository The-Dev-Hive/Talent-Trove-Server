import type { Request, Response, NextFunction } from 'express';

export const bodyLimit = (maxLength: number) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const contentLength = req.headers['content-length'];

    if (contentLength) {
      const length = parseInt(contentLength, 10);
      if (length > maxLength) {
        return res.status(413).json({
          error: `Request body too large. Limit is ${maxLength} bytes.`,
        });
      }
    } else {
      let totalBytes = 0;

      req.on('data', (chunk) => {
        totalBytes += chunk.length;
        if (totalBytes > maxLength) {
          req.destroy();
          return res.status(413).json({
            error: `Request body too large. Limit is ${maxLength} bytes.`,
          });
        }
      });

      req.on('end', () => {
        next();
      });
    }

    next();
  };
};
