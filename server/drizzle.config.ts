import { defineConfig } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
  schema: "./src/drizzle/schema.ts",
  out: "./src/drizzle/migrations",
  dialect: "postgresql",
  verbose: true,
  strict: true,
  dbCredentials: {
    host: process.env.POSTGRES_HOST as string,
    port: parseInt(process.env.POSTGRES_PORT as string),
    user: process.env.POSTGRES_USER as string,
    password: process.env.POSTGRES_PASSWORD as string,
    database: process.env.POSTGRES_DB as string,
  },
});
