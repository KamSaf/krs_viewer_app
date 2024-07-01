import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnCheck } from "./utils";

dotenv.config();
let counter = 0;

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
