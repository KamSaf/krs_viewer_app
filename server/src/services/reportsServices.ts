import { Router } from "express";
import { readFileContent } from "../utils";
import xml2js from "xml2js";

export const reportsRouter = Router();

export type RaportJednostkaMala = {
  JednostkaMala: {
    Naglowek: unknown;
    WprowadzenieDoSprawozdaniaFinansowegoJednostkaMala: unknown;
    BilansJednostkaMala: unknown;
    RZiSJednostkaMala: unknown;
    DodatkoweInformacjeIObjasnieniaJednostkaMala: unknown;
  };
};

export async function processFile(
  file: Express.Multer.File | undefined
): Promise<RaportJednostkaMala | null | void> {
  const path = file ? file.destination + file.filename : undefined;
  const fileContent = path ? await readFileContent(path) : null;
  if (fileContent == null) {
    return null;
  }
  let endResult = null;
  xml2js.parseString(fileContent, { mergeAttrs: true }, (err, result) => {
    if (err) {
      throw new Error("Error occured while processing report file");
    }
    endResult = result;
  });
  return endResult;
}
