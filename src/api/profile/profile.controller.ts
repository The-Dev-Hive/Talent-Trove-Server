import { RequestHandler } from "express";
import { db } from "../../database";
import { employeeProfiles, jobSeekerProfiles } from "../../database/schema";
import { AUTH_RULES } from "../../interface";
import { CustomError, handleAsync, HttpStatus } from "../../utils";
import formatedResponse from "../../utils/formatedResponse";

// **handleAsync()** utils function. This funciton handles dynamicly try().catch() blocks

// get all job seeker profiles from database
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

// Get all employee profiles from database
const GET_EMPLOYEE_PROFILES: RequestHandler = handleAsync(async (req, res) => {
  const result: any = await db.query.employeeProfiles.findMany();

  // sending response with utils function name of 'formattedResponse()'
  formatedResponse(res, {
    statusCode: HttpStatus.OK,
    data: result,
    message: "employee profiles retrieved!",
  });
});

// retived loggedIn user profile based on user role
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
  if (role == AUTH_RULES.SEEKER) {
    result = await db.query.jobSeekerProfiles.findFirst({
      where: (profiles, { eq }) => eq(profiles.userId, Number(userId!)),
    });
  } else if (role == AUTH_RULES.EMPLOYEER) {
    result = await db.query.employeeProfiles.findFirst({
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

// Creating job seeker prfile based on loggin info
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
      message: "created job seeker profile!",
    });
  },
);

// creating employee profile by login user info
const CREATE_EMPLOYEE_PROFILE_BY_LOGGED_IN_USER: RequestHandler = handleAsync(
  async (req, res) => {
    const userId = Number(req.user.userId);
    const { address, experience, education, contactNumber, socialLink } =
      req.body.data;

    const result = await db.insert(employeeProfiles).values({
      userId,
      address,
      experience,
      education,
      contactNumber,
      socialLink,
    });

    // sending response with utils function name of 'formattedResponse()'
    formatedResponse(res, {
      statusCode: HttpStatus.OK,
      data: "result",
      message: "created employee profile!",
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
