import { Router } from "express";
import { Request, Response } from "express";
import { getCompanies, getCompanyReports } from "../services/companiesServices";

export const companiesRouter = Router();

companiesRouter.get("/", async (_req: Request, res: Response) => {
  const data = await getCompanies();
  res.json(data);
});

companiesRouter.get("/:id/reports", async (req: Request, res: Response) => {
  const data = await getCompanyReports(parseInt(req.params.id));
  res.json(data);
});
