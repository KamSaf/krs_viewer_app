import { Router } from "express";
import { Request, Response } from "express";
import multer from "multer";
import { processFile } from "../services/reportsServices";
import { FileProcessingError } from "../errors/reportErrors";

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
      if (err instanceof FileProcessingError) {
        res.status(400).json(err);
      } else {
        res.status(500).json(err);
      }
    }
  }
);
