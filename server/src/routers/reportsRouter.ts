import { Router } from "express";
import { Request, Response } from "express";
import multer from "multer";
import { processFile } from "../services/reportsServices";

export const reportsRouter = Router();
const uploader = multer({ dest: "uploads/" });

reportsRouter.post(
  "/upload",
  uploader.single("file"),
  (req: Request, res: Response) => {
    try {
      console.log(processFile(req.file));
      res.json("Upload operation successfull");
    } catch (err) {
      res.json(err);
    }
  }
);
