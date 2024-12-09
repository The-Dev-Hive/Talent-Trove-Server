import { Router } from "express";
import { AUTH_RULES } from "../../interface";
import auth from "../../middlewares/auth";
import zodValidator from "../../middlewares/common/zodValidation";
import { JobController } from "./job.controller";
import { JobValidationSchema } from "./job.validation";

export const router = Router();

// ALL USER ACCCES

// EMPLOYEE ACCCES
router.post(
  "/",
  zodValidator(JobValidationSchema.createJobSchema),
  auth(),
  JobController.CREATE_JOB_INTO_DB,
);

// JOB_SEEKER ACCCES

export { router as jobRouter };
