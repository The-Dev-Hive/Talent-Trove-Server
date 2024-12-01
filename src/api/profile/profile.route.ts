import { Router } from "express";
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
 *   post:
 *     summary: Get All Employees
 *     tags: [Profile]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
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
 */

router.get("/job-seekers", ProfileController.GET_JOB_SEEKER_PROFILES);

router.get("/employees", ProfileController.GET_EMPLOYEE_PROFILES);
router.get("/me", ProfileController.GET_EMPLOYEE_PROFILES);

export { router as userRouter };
