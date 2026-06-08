import { Propietarios } from "../models/propietarios.js";

export class PropietariosControllers {

    async create(req, res) {
        try {
            const { name, phone, address, email } = req.body;

            const newPropietario = await Propietarios.create({ name, phone, address, email });

            res.status(201).json({
                msj: "Propietario creado",
                data: newPropietario
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ msj: "Error al crear propietario", data: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const propietarios = await Propietarios.find();

            res.status(200).json({
                msj: "Lista de Propietarios",
                data: propietarios
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ msj: "Error al obtener propietarios", data: error.message });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, phone, address, email } = req.body;

            if (!id) {
                return res.status(403).json({ msj: "no se proporcionó id" });
            }

            const response = await Propietarios.findByIdAndUpdate(id, { name, phone, address, email }, { new: true });

            res.status(200).json({
                msj: "Propietario actualizado",
                data: response
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ msj: "Error al actualizar propietario", data: error.message });
        }
    }

    async deletePropietario(req, res) {
        try {
            const { id } = req.params;

            const response = await Propietarios.findByIdAndDelete(id);

            res.status(200).json({
                msj: "Propietario eliminado correctamente",
                data: response
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ msj: "Error al eliminar propietario", data: error.message });
        }
    }
}
