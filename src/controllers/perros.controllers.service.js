import { Perros } from "../models/perros.js";

export class PerrosControllers {

    async create(req, res) {
        try {
            const { name, race, age, img, owner } = req.body;

            const newPerro = await Perros.create({ name, race, age, img, owner });

            res.status(201).json({
                msj: "Perro creado",
                data: newPerro
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ msj: "Error al crear perro", data: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const perros = await Perros.find().populate('owner');

            res.status(200).json({
                msj: "Lista de Perros",
                data: perros
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ msj: "Error al obtener perros", data: error.message });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, race, age, img, owner } = req.body;

            if (!id) {
                return res.status(403).json({ msj: "no se proporcionó id" });
            }

            const response = await Perros.findByIdAndUpdate(id, { name, race, age, img, owner }, { new: true });

            res.status(200).json({
                msj: "Perro actualizado",
                data: response
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ msj: "Error al actualizar perro", data: error.message });
        }
    }

    async deletePerro(req, res) {
        try {
            const { id } = req.params;

            const response = await Perros.findByIdAndDelete(id);

            res.status(200).json({
                msj: "Perro eliminado correctamente",
                data: response
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ msj: "Error al eliminar perro", data: error.message });
        }
    }
}
