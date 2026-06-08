import { Perros, Perros, Perros, Perros } from "../models/perros.js";

export class PerrosControllers {

    async create (req, res) {

        try {
            
            const {name, race, img} = req.body;

        const NewPerro = await Perros.create(name, race, img)

        res.status(201).json({
            msj: "Perro creado",
            data: NewPerro
        })

        } catch (error) {
            
            console.error(error)
        }
    }

    async getAll (req, res) {

        try {
            
            const Perros = await Perros.find();

            res.status(200).json({
                msj: "Lista de Perros",
                data: Perros
            })
        } catch (error) {
            
            console.error(error)
        }
        
    }

    async update (req, res) {

        try {
            
            const { id } = req.params;

            const {name, race, img} = req.body;

            if(!id){

                return res.status(403).json("no se proporciono id")
            }

            const response = await Perros.findByIdAndUpdate(name, race, img, {new: true})

            res.status(200).json({
                msj: "Perros actualizado",
                data: response
            })
        } catch (error) {
            
            console.error(error.message)
        }
    }

    async deletePerro (req, res) {
        
        try {
            
            const { id } = req.params;

            const response = await Perros.findByIdAndDelete(id);

            res.status(200).json({
                msj: "perro eliminado correctamente"
            })
        } catch (error) {
            
            console.error(error.message)
        }
    }
}