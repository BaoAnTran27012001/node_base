import express from "express";
import { getUserList } from "../controllers/index.js";
const router = express.Router();

router.get("/", getUserList);
export default router;
