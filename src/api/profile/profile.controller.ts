import { eq } from "drizzle-orm";
import { RequestHandler } from "express";
import { db } from "../../database";
import { handleAsync, HttpStatus } from "../../utils";
import formatedResponse from "../../utils/formatedResponse";

// handleAsync() utils function. This funciton handles dynamicly try().catch() blocks
const GET_JOB_SEEKER_PROFILES: RequestHandler = handleAsync(
  async (req, res) => {
    const result: any = await db.query.jobSeekerProfiles.findMany();

    // sending response with utils function name of 'formattedResponse()'
    formatedResponse(res, {
      statusCode: HttpStatus.OK,
      data: result,
      message: "job seeker profiles retrieved!",
    });
  },
);

// handleAsync() utils function. This funciton handles dynamicly try().catch() blocks
const GET_EMPLOYEE_PROFILES: RequestHandler = handleAsync(async (req, res) => {
  const result: any = await db.query.employeeProfiles.findMany();

  // sending response with utils function name of 'formattedResponse()'
  formatedResponse(res, {
    statusCode: HttpStatus.OK,
    data: result,
    message: "employee profiles retrieved!",
  });
});
// handleAsync() utils function. This funciton handles dynamicly try().catch() blocks
const GET_AUTHENTICATE_USER: RequestHandler = handleAsync(async (req, res) => {
  const userId = req.user.userId;
  // const result: any = await db.query.employeeProfiles.findFirst({
  //   where: (employeeProfiles)=> employeeProfiles.userId.(userId)
  // });

  const query = `
  SELECT * FROM employee_profiles WHERE user_id = ${userId}`;
  const result = await db.execute(query);

  // sending response with utils function name of 'formattedResponse()'
  formatedResponse(res, {
    statusCode: HttpStatus.OK,
    data: result,
    message: "authenticate user details retrived!",
  });
});

export const ProfileController = {
  GET_JOB_SEEKER_PROFILES,
  GET_EMPLOYEE_PROFILES,
  GET_AUTHENTICATE_USER,
};
