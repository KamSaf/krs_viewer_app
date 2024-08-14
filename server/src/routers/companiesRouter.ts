import { Router } from "express";
import { Request, Response } from "express";
import {
  getCompanies,
  getCompanyReports,
  getCompanyDetails,
} from "../services/companiesServices";

export const companiesRouter = Router();

companiesRouter.get("/", async (_req: Request, res: Response) => {
  const data = await getCompanies();
  res.status(200).json(data);
});

companiesRouter.get("/:id/reports", async (req: Request, res: Response) => {
  const data = await getCompanyReports(parseInt(req.params.id));
  res.status(200).json(data);
});

companiesRouter.get("/details/:id", async (req: Request, res: Response) => {
  const data = await getCompanyDetails(parseInt(req.params.id));
  if (!data) {
    res.status(404).json("Resource not found");
  }
  res.status(200).json(data);
});
