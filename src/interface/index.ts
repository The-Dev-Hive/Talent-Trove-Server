import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user: { userId?: number | string; role?: string } & JwtPayload;
    }
  }
}
