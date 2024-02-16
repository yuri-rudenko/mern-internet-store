import { Router } from "express";
import deviceController from "../controllers/deviceController.js";
import multer from "multer";
import storage from "../storage.js";

const router = new Router();

const upload = multer({storage: storage})

router.post('/', upload.single('img'), deviceController.create);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);

export default router