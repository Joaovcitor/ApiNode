import { Router } from "express";
import tokenConroller from "../controllers/TokenController";
const router = new Router();

router.post("/", tokenConroller.store);

export default router;
