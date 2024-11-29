import bcrypt from "bcryptjs";
import config from "../config";

// Function to comparing a password
export const compareHashPassword = async (
  password: string,
  plainText: string,
): Promise<boolean> => {
  const saltRounds = Number(config.salt_round); // You can adjust the salt rounds as needed
  const salt = await bcrypt.genSalt(saltRounds);
  const compared = await bcrypt.compare(plainText, password);
  return compared;
};
