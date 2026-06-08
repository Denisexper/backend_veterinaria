import { Schema, model } from "mongoose";

const PropietariosSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true
    },
    phone: {
        type: String,
        required: [true, 'phone is required'],
        trim: true
    },
    address: {
        type: String,
        required: [true, 'address is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        trim: true
    }
});

export const Propietarios = model('Propietarios', PropietariosSchema);
