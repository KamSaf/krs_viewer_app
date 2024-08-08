import { Express } from "express";
import { Pool } from "pg";
import fs from "fs";

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

export function readFileContent(path: string): string | void {
  const reader = fs.createReadStream(path, "utf-8");
  const fileContent: string[] = [];
  try {
    reader
      .on("data", (chunk) => {
        fileContent.push(chunk.toString());
        console.log(fileContent);
      })
      .on("end", () => {
        return fileContent;
      });
  } catch (err) {
    throw new Error("Error occurred while trying to read the file");
  }
}
