import { Router } from "express";
import zodValidator from "../../middlewares/common/zodValidation";
import { AuthController } from "./auth.controller";
import { authValidationSchema } from "./auth.validation";

export const router = Router();

// /**
//  * @swagger
//  * /api/v1/auth/register:
//  *   post:
//  *     summary: Register user
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               email:
//  *                 type: string
//  *               fullName:
//  *                 type: string
//  *               bio:
//  *                 type: string
//  *               password:
//  *                 type: string
//  *               role:
//  *                 type: string
//  *               status:
//  *                 type: string
//  *     responses:
//  *       200:
//  *         description: Registered successful
//  *       400:
//  *         description: Cannot registered
//  */

// faflaksdjflajkdsf

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: The Auth managing API
 * /auth/register:
 *   post:
 *     summary: Register User
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               fullName:
 *                 type: string
 *               bio:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *               status:
 *                 type: string
 *
 *     responses:
 *       200:
 *         description: Created User.
 *         content:
 *           application/json:
 *             schema:
 *       500:
 *         description: Some server error
 *
 * /auth/login:
 *   post:
 *     summary: Login User
 *     tags: [Auth]
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

router.post(
  "/register",
  zodValidator(authValidationSchema.registerBodySchema),
  AuthController.registerUserIntoDB,
);

router.post(
  "/login",
  zodValidator(authValidationSchema.loginBodySchema),
  AuthController.loginUserFromDB,
);

export { router as authRouter };
