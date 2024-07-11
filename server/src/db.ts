import pg, { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

function dbConnCheck(pool: Pool) {
  pool
    .connect()
    .then(() => {
      console.log("Database connected");
    })
    .catch(() => {
      throw new Error("Error: Database not connected");
    });
}

const pool: Pool = new pg.Pool({
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT as string),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

dbConnCheck(pool);
const db = drizzle(pool);

export default db;
