import { Router } from "express";
import alunoConroller from "../controllers/AlunoController";
import loginRequirede from "../middleware/loginRequired";
const router = new Router();

router.get("/", alunoConroller.index);
router.post("/", loginRequirede, alunoConroller.store);
router.put("/:id", loginRequirede, alunoConroller.update);
router.get("/:id", alunoConroller.show);
router.delete("/:id", alunoConroller.delete);

export default router;
