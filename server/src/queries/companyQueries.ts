import { db } from "../db";
import { Company } from "@common/types";

export async function findCompanies(): Promise<Company[]> {
  return await db.query.CompanyTable.findMany();
}
