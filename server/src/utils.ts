import { Pool } from "pg";

export function dbConnCheck(pool: Pool) {
  pool
    .connect()
    .then(() => {
      console.log("Database connected");
    })
    .catch(() => {
      throw new Error("Error: Database not connected");
    });
}
