import {Schema, model} from "mongoose";
import { Enum_EstadoInscripcion } from "./enums";
import { ProyectModel } from "./proyect";
import UserModel from "./user";

interface Inscripcion{
    proyecto: Schema.Types.ObjectId,
    estudiante: Schema.Types.ObjectId,
    estado: Enum_EstadoInscripcion,
    fechaIngreso: Date,
    fechaEgreso: Date,
}

const inscripcionSchema  = new Schema<Inscripcion>({
    estado:{
        type: String,
        enum: Enum_EstadoInscripcion,
        required: true,
    },
    fechaIngreso:{
        type: Date,
        required: true,
    },
    fechaEgreso:{
        type: Date,
        required: true,
    },
    proyecto:{
        type: Schema.Types.ObjectId,
        ref: ProyectModel,
        required: true,
    }, 
    estudiante:{
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    },
});

const InscipcionModel = model("Inscripcion", inscripcionSchema);

export {InscipcionModel};