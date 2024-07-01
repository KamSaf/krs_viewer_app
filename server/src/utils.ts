import { pool } from "./config";

async function dbConnCheck() {
  try {
    await pool.connect();
    console.log("Database connected");
  } catch (err) {
    console.log("Database not connected");
  }
}

export { dbConnCheck };
