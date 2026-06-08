import { Schema, model } from "mongoose";

const PerrosSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true
    },
    race: {
        type: String,
        required: [true, 'race is required'],
        trim: true
    },
    age: {
        type: Number,
        required: [true, 'age is required']
    },
    img: {
        type: String,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Propietarios',
        required: [true, 'owner is required']
    }
});

export const Perros = model('Perros', PerrosSchema);
