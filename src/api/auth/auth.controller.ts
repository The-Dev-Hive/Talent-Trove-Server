import { RequestHandler } from "express";
import { db } from "../../database";
import { users } from "../../database/schema";
import formatedResponse from "../../utils/formatedResponse";
import handleAsync from "../../utils/handleAsync";
import hashPassword from "../../utils/hashPassword";
import { TRegisterBodySchema } from "./auth.validation";

const registerUserIntoDB: RequestHandler = handleAsync(async (req, res) => {
  const { email, fullName, bio, password, profilePictureUrl } =
    req.body as TRegisterBodySchema;

  const hashedPassword = await hashPassword(password as string);
  const result: any = await db.insert(users).values({
    fullName,
    bio,
    email,
    password: hashedPassword,
    profilePictureUrl,
  });

  formatedResponse(res, {
    statusCode: 201,
    data: result,
    message: "user registerd!",
  });
});

export const AuthController = {
  registerUserIntoDB,
};
