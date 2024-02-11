import { Router } from "express";
import typeController from "../controllers/typeController.js";
const router = new Router();
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js";


router.post('/', checkRoleMiddleware('ADMIN'), typeController.create);
router.get('/', typeController.getAll);

export default router