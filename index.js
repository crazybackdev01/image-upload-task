import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDb.config.js";
import path from "path";
import imageRoutes from "./routes/image.routes.js";

dotenv.config();

connectDB(process.env.MONGODB_CLOUD_URL);

const port = process.env.PORT || 4000;

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Serve index.html when visiting "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/api/image", imageRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
