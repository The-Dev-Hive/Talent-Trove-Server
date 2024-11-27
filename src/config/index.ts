import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export * from "./envs";
export * from "./logger";
export default {
  port: process.env.PORT,
  salt_round: process.env.SALT_ROUND,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_Access_Expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
};
