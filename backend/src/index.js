import express from "express";
import authRoutes from "./routes/authroute.js";
import dotenv from "dotenv";
import { connectDB } from "../lib/db.js";

dotenv.config();
const app = express();

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  connectDB();
});
