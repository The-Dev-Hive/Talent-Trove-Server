import { Router } from "express";
import { AUTH_RULES } from "../../interface";
import auth from "../../middlewares/auth";
import zodValidator from "../../middlewares/common/zodValidation";
import { ProfileController } from "./profile.controller";
import { profleValidationSchema } from "./profile.validation";

export const router = Router();

/**
 * @swagger
 * tags:
 *   name: Profile
 *   description: The Profile managing API
 * /profile/job-seekers:
 *   get:
 *     summary: Get All Job Seeker Profile
 *     tags: [Profile]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *
 *     responses:
 *       200:
 *         description: Retrieved Job Seeker Profiles.
 *         content:
 *           application/json:
 *             schema:
 *       500:
 *         description: Some server error
 *
 * /profile/employees:
 *   get:
 *     summary: Get All Employee Profile
 *     tags: [Profile]
 *     requestBody:
 *       content:
 *         application/json:
 *
 *
 *     responses:
 *       200:
 *         description: Retrieved Job Seeker Profiles.
 *         content:
 *           application/json:
 *             schema:
 *       500:
 *         description: Some server error
 *
 *
 *
 * /profile/me:
 *   post:
 *     summary: Creating Profile
 *     tags: [Profile]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               resumeUrl:
 *                 type: string
 *               linedinUrl:
 *                 type: string
 *               portfolioUrl:
 *                 type: string
 *               gender:
 *                 type: string
 *
 *     responses:
 *       200:
 *         description: Logged in User.
 *         content:
 *           application/json:
 *             schema:
 *       500:
 *         description: Some server error
 *
 *
 */

// get all job seeker profiles from database
router.get("/job-seekers", ProfileController.GET_JOB_SEEKER_PROFILES);
// get all employee profile from database
router.get("/employees", ProfileController.GET_EMPLOYEE_PROFILES);

// BOTH ACCESSABLE ROUTES

router.get(
  "/me",
  auth(AUTH_RULES.EMPLOYEER, AUTH_RULES.SEEKER),
  ProfileController.GET_AUTHENTICATE_USER,
); // retrived logged in user details based on role from auth token

// EMPLOYEE ACCESSABLE ROUTES :-

router.post(
  "/me-employee",
  zodValidator(profleValidationSchema.createEmployeeProfile),
  auth(AUTH_RULES.EMPLOYEER),
  ProfileController.CREATE_EMPLOYEE_PROFILE_BY_LOGGED_IN_USER,
); // create Employee Profile based on loggin info

// JOB_SEEKER ACCESSABLE ROUTES :-

router.post(
  "/me-seeker",
  zodValidator(profleValidationSchema.createJobSeekerProfile),
  auth(AUTH_RULES.SEEKER),
  ProfileController.CREATE_JOB_SEEKER_PROFILE_BY_LOGGED_IN_USER,
); // create Job Seeker Profile based on loggin info

export { router as userRouter };
