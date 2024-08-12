import { Router } from "express";
import { Request, Response } from "express";
import multer from "multer";
import { processFile } from "../services/reportsServices";

export const reportsRouter = Router();
const uploader = multer({ dest: "uploads/" });

reportsRouter.post(
  "/upload",
  uploader.single("file"),
  async (req: Request, res: Response) => {
    try {
      const data = await processFile(req.file);
      console.log(data);
      res.status(200).json("Data processed!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
);
