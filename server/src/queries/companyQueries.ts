import { db } from "../db";
import { Company } from "@common/types";
import { eq } from "drizzle-orm";
import { CompanyTable } from "../drizzle/schema";

export function findCompanies(): Promise<Company[]> {
  return db.query.CompanyTable.findMany();
}

export function findCompany(id: number): Promise<Company | undefined> {
  return db.query.CompanyTable.findFirst({
    where: eq(CompanyTable.id, id),
  });
}
