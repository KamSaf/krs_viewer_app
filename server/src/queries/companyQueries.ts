import { db } from "../db";
import { Company } from "@common/types";

export function findCompanies(): Promise<Company[]> {
  return db.query.CompanyTable.findMany();
}
