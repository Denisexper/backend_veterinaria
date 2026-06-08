import { Router } from "express";
import { PropietariosControllers } from "../controllers/propietarios.controllers.service.js";

const router = Router();
const propietariosControllers = new PropietariosControllers();

router.get('/', propietariosControllers.getAll);
router.post('/', propietariosControllers.create);
router.put('/:id', propietariosControllers.update);
router.delete('/:id', propietariosControllers.deletePropietario);

export default router;
