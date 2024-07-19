import { eq } from "drizzle-orm";
import { db } from "../db";
import { Report } from "@common/types";
import { ReportTable } from "../drizzle/schema";

export async function findReports(companyId: number): Promise<Report[]> {
  return await db.query.ReportTable.findMany({
    where: eq(ReportTable.companyId, companyId),
  });
}
