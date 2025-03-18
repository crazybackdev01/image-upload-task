import { Router } from "express";
import upload from "../middlewares/multer.middleware.js";
import {
  deleteImageController,
  getImageController,
  uploadImageController,
} from "../controllers/image.controllers.js";

const router = Router();

router.post("/upload", upload.single("image"), uploadImageController);
router.get("/:id", getImageController);
router.delete("/:id", deleteImageController);

export default router;
