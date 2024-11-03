import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import handleAsync from "../../utils/handleAsync";

const zodValidator = (schema: AnyZodObject) => {
  return handleAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      await schema.parseAsync({
        body: req.body,
      });
      next();
    },
  );
};

export default zodValidator;
