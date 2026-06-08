import { Router } from "express";
import { HistorialControllers } from "../controllers/historial.controllers.service.js";

const router = Router();
const historialControllers = new HistorialControllers();

router.get('/:id', historialControllers.getByDog);
router.post('/', historialControllers.create);

export default router;
