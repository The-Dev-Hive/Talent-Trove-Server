import { Router } from "express";
import zodValidator from "../../middlewares/common/zodValidation";
import { AuthController } from "./auth.controller";
import { authValidationSchema } from "./auth.validation";

export const router = Router();

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Log in a user
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
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid credentials
 */

router.post(
  "/register",
  zodValidator(authValidationSchema.registerBodySchema),
  AuthController.registerUserIntoDB,
);

export { router as authRouter };
