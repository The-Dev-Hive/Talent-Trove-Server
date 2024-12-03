import { JwtPayload } from "jsonwebtoken";
import { TUserRole } from "../api/auth/auth.interface";

declare global {
  namespace Express {
    interface Request {
      user: { userId?: number | string; role?: string } & JwtPayload;
    }
  }
}

export const AUTH_RULES = {
  SEEKER: "job_seeker",
  EMPLOYEER: "employer",
} as const;
