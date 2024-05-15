import { Router } from "express";
import fotoConroller from "../controllers/FotoController";
import loginRequired from "../middleware/loginRequired";

const router = new Router();

router.post("/", loginRequired, fotoConroller.store);

export default router;
