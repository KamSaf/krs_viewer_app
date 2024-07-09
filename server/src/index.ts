import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnCheck } from "./utils";
import { pool } from "./config";
import type { Company, Report } from "../../common/types";
import sample_companies from "../sample_data/companies.json";
import sample_reports from "../sample_data/reports.json";

dotenv.config();

dbConnCheck(pool);

const app: Express = express();
const port = process.env.SERVER_PORT || 3000;
app.use(cors());

app.get("/api/companies", (req: Request, res: Response) => {
  const companies: Company[] = [...sample_companies];
  res.json(companies);
});

app.get("/api/companies/:id/reports", (req: Request, res: Response) => {
  const reports: Report[] = [...sample_reports];
  const data = reports.filter(
    (rep) => rep.companyId === parseInt(req.params.id)
  );
  res.json(data);
});

app.listen(port, () => {
  console.log(`\n\n⚡️[server]: Server is running at http://localhost:${port}`);
});
