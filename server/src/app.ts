import express, { Express } from "express";
import cors from "cors";
import { pool } from "./db";
import { init } from "./utils";
import { companiesRouter } from "./routers/companiesRouter";
import { reportsRouter } from "./routers/reportsRouter";

const app: Express = express();
app.use(
  cors(),
  express.json({ limit: "15mb" }),
  express.urlencoded({ extended: true })
);
app.use("/api/companies", companiesRouter);
app.use("/api/reports", reportsRouter);

init(app, pool).catch((err) => {
  console.error(
    "\x1b[31m✘\x1b[0m[server]: Unexpected error while booting the server\n",
    err
  );
  process.exit(1);
});
