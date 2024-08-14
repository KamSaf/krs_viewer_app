import type { Company, Report } from "@common/types";
import { findCompanies, findCompany } from "../queries/companyQueries";
import { findReports } from "../queries/reportQueries";

export async function getCompanies(): Promise<Company[]> {
  return await findCompanies();
}

export async function getCompanyReports(companyId: number): Promise<Report[]> {
  return await findReports(companyId);
}

export async function getCompanyDetails(
  companyId: number
): Promise<Company | undefined> {
  if (isNaN(companyId)) {
    return undefined;
  }
  return await findCompany(companyId);
}

// error handling
