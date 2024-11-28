import { and, eq } from "drizzle-orm";
import { RequestHandler } from "express";
import config from "../../config";
import { db } from "../../database";
import { users } from "../../database/schema";
import {
  compareHashPassword,
  createToken,
  handleAsync,
  hashPassword,
} from "../../utils";
import formatedResponse from "../../utils/formatedResponse";
import { TLoginBody, TRegisterBodySchema } from "./auth.validation";

// controller function for creating user
// handleAsync() utils function. This funciton handles dynamicly try().catch() blocks
const registerUserIntoDB: RequestHandler = handleAsync(async (req, res) => {
  // collect request body object
  const { email, fullName, bio, password, profilePictureUrl } =
    req.body as TRegisterBodySchema;

  // convert plain text password to hash password
  const hashedPassword = await hashPassword(password as string);
  // creating user into database with drizzle ORM
  const result: any = await db.insert(users).values({
    fullName,
    bio,
    email,
    password: hashedPassword,
    profilePictureUrl,
  });

  // sending response with utils function name of 'formattedResponse()'
  formatedResponse(res, {
    statusCode: 201,
    data: result,
    message: "user registerd!",
  });
});

const loginUserFromDB: RequestHandler = handleAsync(async (req, res) => {
  const { email, password } = req.body as TLoginBody;

  // matching email and password into db
  const user = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (!user) {
    throw new Error("user not found");
  }
  // check the password valid or not
  const comparePassword = await compareHashPassword(user.password, password);
  console.log(comparePassword);
  if (!comparePassword) {
    throw new Error("user email and password not matching");
  }

  const jwtPayload = {
    userId: user.id!,
    role: user.role!,
  };

  const accesToken = createToken(
    jwtPayload,
    config.jwt_access_secret!,
    config.jwt_access_expires_in!,
  );

  // Exclude the password field manually
  const { password: _, ...userWithoutPassword } = user;

  // sending response with utils function name of 'formattedResponse()'
  formatedResponse(res, {
    statusCode: 201,
    data: { token: accesToken, user: userWithoutPassword },
    message: "user logged in!",
  });
});

export const AuthController = {
  registerUserIntoDB,
  loginUserFromDB,
};
