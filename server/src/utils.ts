import { Express } from "express";
import { Pool } from "pg";
import fs from "node:fs/promises";
import { FileReadingError } from "./errors/reportErrors";

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

export function parseDate(date: string): Date {
  const [day, month, year] = date.split(".").map(Number);
  return new Date(year, month - 1, day);
}

export async function readFileContent(path: string): Promise<string | void> {
  try {
    return await fs.readFile(path, { encoding: "utf-8" });
  } catch (err) {
    throw new FileReadingError(err as Error);
  }
}
