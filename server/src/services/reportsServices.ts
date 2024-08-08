import { Router } from "express";
import { readFileContent } from "../utils";

export const reportsRouter = Router();

export function processFile(
  file: Express.Multer.File | undefined
): string | null | void {
  return file ? readFileContent(file.destination + file.filename) : null;
}
