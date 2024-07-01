import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnCheck } from "./utils";
import { pool } from "./config";
import type { Company, Report } from "../../common/types";

dotenv.config();

dbConnCheck(pool);

const app: Express = express();
const port = process.env.SERVER_PORT || 3000;
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello!" });
});

app.get("/api/companies", (req: Request, res: Response) => {
  const companies: Company[] = [
    {
      id: 1,
      name: "Revolve Healthcare",
      address: "Katowice, ul. Porcelanowa 23 40-246",
      krs: "0000972657",
    },
    {
      id: 2,
      name: "Neubloc Polska",
      address: "Katowice, ul. Grabowa 2 40-172",
      krs: "0000335382",
    },
  ];

  res.json(companies);
});

app.get("/api/companies/:id", (req: Request, res: Response) => {
  // use id to find reports of chosen company
  const reports: Report[] = [
    {
      id: 1,
      dateFrom: "01.01.2023",
      dateTo: "31.12.2023",
      status: "stonks",
    },
    {
      id: 2,
      dateFrom: "01.01.2022",
      dateTo: "31.12.2022",
      status: "no stonks",
    },
  ];

  res.json(reports);
});

app.listen(port, () => {
  console.log(`\n\n⚡️[server]: Server is running at http://localhost:${port}`);
});
