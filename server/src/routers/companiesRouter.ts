import { Router } from "express";
import { Request, Response } from "express";
import { getCompanies, getCompanyReports } from "../services/companiesServices";

export const companiesRouter = Router();

companiesRouter.get("/", (_req: Request, res: Response) => {
  res.json(getCompanies());
});

companiesRouter.get("/:id/reports", (req: Request, res: Response) => {
  res.json(getCompanyReports(parseInt(req.params.id)));
});
