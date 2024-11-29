import bcrypt from "bcryptjs";
import config from "../config";

// Function to hash a password
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = Number(config.salt_round); // You can adjust the salt rounds as needed
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
