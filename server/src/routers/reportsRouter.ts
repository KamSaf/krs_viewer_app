import { Router } from "express";
import { Request, Response } from "express";
import multer from "multer";

export const reportsRouter = Router();
const uploader = multer({ dest: "uploads/" });

reportsRouter.post(
  "/upload",
  uploader.single("file"),
  (req: Request, res: Response) => {
    res.json("File uploaded successfully");
  }
);
