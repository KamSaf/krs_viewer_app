import type { Company, Report } from "@common/types";
import sample_companies from "../../sample_data/companies.json";
import sample_reports from "../../sample_data/reports.json";

export function getCompanies(): Company[] {
  return [...sample_companies] as Company[];
}

export function getCompanyReports(id: number): Report[] {
  const reports: Report[] = sample_reports.map((report) => {
    return {
      ...report,
      status: report.status as "stonks" | "no stonks",
    };
  });
  return reports.filter((rep) => rep.companyId === id);
}
