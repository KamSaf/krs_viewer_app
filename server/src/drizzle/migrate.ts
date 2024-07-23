import { migrate } from "drizzle-orm/node-postgres/migrator";
import "dotenv/config";
import { db, pool } from "../db";

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
