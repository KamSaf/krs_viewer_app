import type { Company, Report } from "@common/types";
import { findCompanies } from "../queries/companyQueries";
import { findReports } from "../queries/reportQueries";

export async function getCompanies(): Promise<Company[]> {
  return await findCompanies();
}

export async function getCompanyReports(companyId: number): Promise<Report[]> {
  return await findReports(companyId);
}
