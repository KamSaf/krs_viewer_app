import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import pg, { Pool } from "pg";
import cors from "cors";

dotenv.config();
let counter = 0;

const pool: Pool = new pg.Pool({
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT || "5432"),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

async function dbConnCheck() {
  try {
    await pool.connect();
    console.log("Database connected");
  } catch (err) {
    console.log("Database not connected");
  }
}
dbConnCheck();

const app: Express = express();
const port = process.env.SERVER_PORT || 3000;
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  counter = counter + 1;
  res.json({ code: 200, message: `Hello World! x ${counter}` });
});

app.listen(port, () => {
  console.log(`\n\n⚡️[server]: Server is running at http://localhost:${port}`);
});
