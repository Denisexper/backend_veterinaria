import { Historial } from "../models/historial.js";

export class HistorialControllers {

    async create(req, res) {
        try {
            const { diagnosis, weight, treatment, observations, dog, owner } = req.body;

            const newHistorial = await Historial.create({ diagnosis, weight, treatment, observations, dog, owner });

            res.status(201).json({
                msj: "Consulta médica registrada",
                data: newHistorial
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ msj: "Error al registrar consulta", data: error.message });
        }
    }

    async getByDog(req, res) {
        try {
            const { id } = req.params;

            const historial = await Historial.find({ dog: id })
                .populate('dog')
                .populate('owner');

            res.status(200).json({
                msj: "Historial clínico",
                data: historial
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ msj: "Error al obtener historial", data: error.message });
        }
    }
}
