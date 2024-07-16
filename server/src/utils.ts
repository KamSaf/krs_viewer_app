import { Express } from "express";
import { Pool } from "pg";

async function dbConnCheck(pool: Pool): Promise<void> {
  try {
    const client = await pool.connect();
    client.release();
    console.log("\x1b[32m✔\x1b[0m[server]: Database connected");
    return;
  } catch (err) {
    throw new Error("Database not connected");
  }
}

export async function init(app: Express, pool: Pool): Promise<void> {
  await dbConnCheck(pool);
  const port = process.env.SERVER_PORT;
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
}
