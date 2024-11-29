import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config();
export default defineConfig({
  out: "./drizzle",
  schema: "./src/database/schema/*",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
  verbose: true,
  strict: true,
});
