import { eq } from "drizzle-orm";
import { RequestHandler } from "express";
import { db } from "../../database";
import { jobSeekerProfiles } from "../../database/schema";
import { AUTH_RULES } from "../../interface";
import { CustomError, handleAsync, HttpStatus } from "../../utils";
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
  const { userId, role } = req.user;

  // showing error if userId not provided
  if (!userId) {
    throw new CustomError(
      HttpStatus.NOT_FOUND,
      "request client user mission, please login again",
    );
  }

  // define function glob scop variable for using block scop
  let result: any;
  if (role == AUTH_RULES.EMPLOYEER) {
    result = await db.query.employeeProfiles.findFirst({
      where: (profiles, { eq }) => eq(profiles.userId, Number(userId!)),
    });
  } else {
    result = await db.query.jobSeekerProfiles.findFirst({
      where: (profiles, { eq }) => eq(profiles.userId, Number(userId!)),
    });
  }
  console.log({ result });
  // sending response with utils function name of 'formattedResponse()'
  formatedResponse(res, {
    statusCode: HttpStatus.OK,
    data: result,
    message: "authenticated user profile retrived!",
  });
});

// handleAsync() utils function. This funciton handles dynamicly try().catch() blocks
const CREATE_JOB_SEEKER_PROFILE_BY_LOGGED_IN_USER: RequestHandler = handleAsync(
  async (req, res) => {
    const userId = Number(req.user.userId);

    const { gender, resumeUrl, portfolioUrl } = req.body.data;

    const result = await db.insert(jobSeekerProfiles).values({
      userId,
      resumeUrl,
      portfolioUrl,
      gender,
    });

    // sending response with utils function name of 'formattedResponse()'
    formatedResponse(res, {
      statusCode: HttpStatus.OK,
      data: result,
      message: "authenticate user details retrived!",
    });
  },
);
// handleAsync() utils function. This funciton handles dynamicly try().catch() blocks
const CREATE_EMPLOYEE_PROFILE_BY_LOGGED_IN_USER: RequestHandler = handleAsync(
  async (req, res) => {
    const userId = Number(req.user.userId);

    // const result = await db.insert(jobSeekerProfiles).values({
    //   userId,
    //   gender: req.body.gender,
    //   linkedinUrl: req.body.linedinUrl,
    //   portfolioUrl: req.body.portfolioUrl,
    //   resumeUrl: req.body.resumeUrl,
    // });

    // sending response with utils function name of 'formattedResponse()'
    formatedResponse(res, {
      statusCode: HttpStatus.OK,
      data: "result",
      message: "authenticate user details retrived!",
    });
  },
);

export const ProfileController = {
  GET_JOB_SEEKER_PROFILES,
  GET_EMPLOYEE_PROFILES,
  GET_AUTHENTICATE_USER,
  CREATE_EMPLOYEE_PROFILE_BY_LOGGED_IN_USER,
  CREATE_JOB_SEEKER_PROFILE_BY_LOGGED_IN_USER,
};
