import { Router } from "express";
import { Request, Response } from "express";
import multer from "multer";
import { processFile, getReportDetails } from "../services/reportsServices";
import { FileProcessingError, EmptyFileError } from "../errors/reportErrors";

export const reportsRouter = Router();
const uploader = multer({ dest: "uploads/" });

reportsRouter.post(
  "/upload",
  uploader.single("file"),
  async (req: Request, res: Response) => {
    try {
      const data = await processFile(req.file);
      console.log(data);
      res.status(201).json("Data processed");
    } catch (err) {
      if (err instanceof FileProcessingError || err instanceof EmptyFileError) {
        res.status(400).json(err.message);
      } else {
        res.status(500).json("Internal server error");
      }
    }
  }
);

reportsRouter.get("/details/:id", async (req: Request, res: Response) => {
  const data = await getReportDetails(parseInt(req.params.id));
  if (!data) {
    res.status(404).json("Resource not found");
  }
  res.status(200).json(data);
});
