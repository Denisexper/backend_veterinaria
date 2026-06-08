import { Schema, model } from "mongoose";

const Perros = new Schema({

    name: {
        type: String,
        required: [true, 'name is required'],
        trim: [true]
    },
    race: {
        type: String,
        required: [true, 'race is required'],
        trim: [true]
    },
    img: {
        type: String,
    }
})

export const Perros = model('Perros', Perros)