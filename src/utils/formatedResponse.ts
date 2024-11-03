import { Response } from "express";

type formatedResponse<TAllData> = {
  statusCode: number;
  message: string;
  data: TAllData;
  errors?: any | null;
};

const formatedResponse = <TAllData>(
  res: Response,
  data: formatedResponse<TAllData>,
) => {
  res.status(data?.statusCode).json({
    status:
      data.statusCode >= 200 && data.statusCode < 300 ? "success" : "error",
    message: data?.message || "Something went wrong!",
    data: data?.data,
    errors: null,
  });
};

export default formatedResponse;
