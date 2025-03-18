import { Router } from "express";
import upload from "../middlewares/multer.middleware.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello from Image route");
});

router.post("/upload", upload.single("image"), uploadImageController);

export default router;
