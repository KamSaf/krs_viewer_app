import { Router } from "express";
import { Request, Response } from "express";
import { getCompanies, getCompanyReports } from "../services/companiesServices";

export const companiesRouter = Router();

companiesRouter.get("/", (_req: Request, res: Response) => {
  getCompanies().then((data) => {
    res.json(data);
  });
});

companiesRouter.get("/:id/reports", (req: Request, res: Response) => {
  getCompanyReports(parseInt(req.params.id)).then((data) => {
    res.json(data);
  });
});
