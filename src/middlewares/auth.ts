import { NextFunction, Request, Response } from "express";
import { TUserRole } from "../api/auth/auth.interface";
import config from "../config";
import { CustomError, handleAsync, HttpStatus, verifyToken } from "../utils";

const auth = (...requiredRoles: TUserRole[]) => {
  return handleAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const token = req.headers.authorization;
      if (!token) {
        throw new CustomError(HttpStatus.FORBIDDEN, "token not found");
      }

      try {
        const decoded = verifyToken(token, config.jwt_access_secret as string);

        const role = decoded.role;

        if (
          requiredRoles.length > 0 &&
          !requiredRoles.includes(role as TUserRole)
        ) {
          throw new CustomError(
            HttpStatus.UNAUTHORIZED,
            "you are not authorized",
          );
        }

        req.user = decoded;
        next();
      } catch (err) {
        throw new CustomError(
          HttpStatus.UNAUTHORIZED,
          "You Are Not Authorized",
        );
      }
    },
  );
};

export default auth;