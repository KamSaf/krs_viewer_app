import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { init } from "./utils";
import { pool } from "./config";
import type { Company, Report } from "@common/types";
import sample_companies from "../sample_data/companies.json";
import sample_reports from "../sample_data/reports.json";

dotenv.config();

const app: Express = express();
app.use(cors(), express.json({ limit: "15mb" }));

app.get("/api/companies", (_req: Request, res: Response) => {
  res.json([...sample_companies] as Company[]);
});

app.get("/api/companies/:id/reports", (req: Request, res: Response) => {
  const reports: Report[] = [...sample_reports];
  const data = reports.filter(
    (rep) => rep.companyId === parseInt(req.params.id)
  );
  res.json(data);
});

init(app, pool).catch((err) => {
  console.error(
    "\n\x1b[31m✘\x1b[0m[server]: Unexpected error while booting the server\n",
    err
  );
  process.exit(1);
});
