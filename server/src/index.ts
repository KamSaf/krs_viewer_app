import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { init } from "./utils";
import { pool } from "./config";
import { companiesRouter } from "./routers/companiesRouter";

dotenv.config();

const app: Express = express();
app.use(cors(), express.json({ limit: "15mb" }));
app.use("/api/companies", companiesRouter);

init(app, pool).catch((err) => {
  console.error(
    "\x1b[31m✘\x1b[0m[server]: Unexpected error while booting the server\n",
    err
  );
  process.exit(1);
});
