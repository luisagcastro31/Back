import mongoose from 'mongoose';
import { ProjectModel } from "../proyecto/proyecto.js";
import { UserModel } from "../usuario/usuario.js";
const {Schema, model} = mongoose;
/* interface Avance{
    proyecto: Schema.Types.ObjectId,
    fecha: Date,
    descripcion: string,
    observaciones: [string],
    creadoPor: Schema.Types.ObjectId,
} */

const advancementSchema = new Schema({
   fecha:{
       type: Date,
       required: true,
   },
   descripcion:{
       type: String,
       required: true,
   }, 
   observaciones:[
       {
           type: String,
       },
   ],
   proyecto:{
       type: Schema.Types.ObjectId,
       ref: ProjectModel,
       required: true,
   },
   creadoPor:{
       type: Schema.Types.ObjectId,
       ref: UserModel,
       required: true,
   },
});

const AdvancementModel = model("Avance", advancementSchema);

export {AdvancementModel};