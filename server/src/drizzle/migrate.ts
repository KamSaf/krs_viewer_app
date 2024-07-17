import { Pool } from "pg";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import * as schema from "./schema";
import { drizzle } from "drizzle-orm/node-postgres";
import "dotenv/config";

export const pool: Pool = new Pool({
  host: process.env.POSTGRES_HOST as string,
  port: parseInt(process.env.POSTGRES_PORT as string),
  user: process.env.POSTGRES_USER as string,
  password: process.env.POSTGRES_PASSWORD as string,
  database: process.env.POSTGRES_DB as string,
});

const db = drizzle(pool, { schema });

async function runMigrations() {
  console.log("### Running migrations... ###");
  await migrate(db, { migrationsFolder: "src/drizzle/migrations" });
  await pool.end();
  console.log("### Migrations complete ###");
}

runMigrations().catch((err) => {
  console.log("Migration failed\n", err);
  process.exit(1);
});
