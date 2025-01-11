import express from "express";
import { home, register } from "../controller/authcontroller.js";

const router = express.Router();
router.get("/", home);
router.post("/register", register);

export default router;
