import { Router } from "express";
import { AUTH_RULES } from "../../interface";
import auth from "../../middlewares/auth";
import { ProfileController } from "./profile.controller";

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

router.get("/job-seekers", ProfileController.GET_JOB_SEEKER_PROFILES);

router.get("/employees", ProfileController.GET_EMPLOYEE_PROFILES);
router.post(
  "/me-employee",
  auth(AUTH_RULES.EMPLOYEER),
  ProfileController.CREATE_EMPLOYEE_PROFILE_BY_LOGGED_IN_USER,
);
router.post(
  "/me-seeker",
  auth(AUTH_RULES.SEEKER),
  ProfileController.CREATE_JOB_SEEKER_PROFILE_BY_LOGGED_IN_USER,
);
router.get("/me", ProfileController.GET_EMPLOYEE_PROFILES);

export { router as userRouter };
