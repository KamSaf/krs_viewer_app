import { Router } from "express";
import { readFileContent } from "../utils";
import { Parser, processors } from "xml2js";
import { FileProcessingError, EmptyFileError } from "../errors/reportErrors";
import { SmallUnitReport, OtherUnitReport } from "src/types/reportTypes";
import { findReport } from "../queries/reportQueries";
import type { Report } from "@common/types";

export const reportsRouter = Router();

export async function processFile(
  file: Express.Multer.File | undefined
): Promise<SmallUnitReport | OtherUnitReport | null | void> {
  const parser = new Parser({
    trim: true,
    explicitArray: false,
    tagNameProcessors: [processors.stripPrefix],
  });
  const path = file ? file.destination + file.filename : undefined;
  const fileContent = path ? await readFileContent(path) : null;
  if (!fileContent) {
    throw new EmptyFileError();
  }
  return new Promise((resolve, reject) => {
    parser.parseString(fileContent, (err, result) => {
      if (err) {
        reject(new FileProcessingError(err));
      }
      resolve(
        Object.keys(result).includes("JednostkaMala")
          ? (result as SmallUnitReport)
          : (result as OtherUnitReport)
      );
    });
  });
}

export async function getReportDetails(
  reportId: number
): Promise<Report | undefined> {
  if (isNaN(reportId)) {
    return undefined;
  }
  return await findReport(reportId);
}
