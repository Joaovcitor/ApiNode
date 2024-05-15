import { Router } from "express";
import homeConroller from "../controllers/HomeController";
const router = new Router();

router.get("/", homeConroller.index);

export default router;
