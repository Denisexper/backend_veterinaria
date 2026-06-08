import { Schema, model } from "mongoose";

const HistorialSchema = new Schema({
    diagnosis: {
        type: String,
        required: [true, 'diagnosis is required'],
        trim: true
    },
    weight: {
        type: Number,
        required: [true, 'weight is required']
    },
    treatment: {
        type: String,
        required: [true, 'treatment is required'],
        trim: true
    },
    observations: {
        type: String,
        trim: true
    },
    dog: {
        type: Schema.Types.ObjectId,
        ref: 'Perros',
        required: [true, 'dog is required']
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Propietarios',
        required: [true, 'owner is required']
    }
}, { timestamps: true });

export const Historial = model('Historial', HistorialSchema);
