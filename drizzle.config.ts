import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config();
export default defineConfig({
  out: "./src/database/drizzle",
  schema: "./src/database/schema/*",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
