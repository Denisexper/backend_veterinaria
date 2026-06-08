import { Router } from "express";
import { PerrosControllers } from "../controllers/perros.controllers.service.js";

const router = Router();
const perrosControllers = new PerrosControllers();

router.get('/', perrosControllers.getAll);
router.post('/', perrosControllers.create);
router.put('/:id', perrosControllers.update);
router.delete('/:id', perrosControllers.deletePerro);

export default router;
