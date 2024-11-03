import { RequestHandler } from "express";
import formatedResponse from "../../utils/formatedResponse";
import handleAsync from "../../utils/handleAsync";

const registerUserIntoDB: RequestHandler = handleAsync(async (req, res) => {
  const userData = req.body;
  formatedResponse(res, {
    statusCode: 201,
    data: userData,
    message: "User registerd successfully!",
  });
});

export const AuthController = {
  registerUserIntoDB,
};
