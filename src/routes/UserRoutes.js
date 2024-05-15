import { Router } from "express";
import userConroller from "../controllers/UserController";
import loginRequired from "../middleware/loginRequired";
const router = new Router();

// Não deveria existir
router.get("/", loginRequired, userConroller.index);
router.get("/:id", userConroller.show);

//
router.post("/", userConroller.store);
router.put("/", loginRequired, userConroller.update);
router.delete("/", loginRequired, userConroller.delete);

export default router;
