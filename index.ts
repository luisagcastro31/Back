import conectarBD from "./db/db";
import UserModel from "./models/user";
import {Enum_Rol} from "./models/enums";
import { ProyectModel } from "./models/proyect";

const main = async () => {
    await conectarBD();

    ProyectModel.create({
        nombre:"Proyecto 1",
        presupuesto: 120,
        fechaInicio: Date.now(),
        fechaFin: new Date("2022/11/10"),
    })

};
main();

// CREAR UN USUARIO    
/* await UserModel.create({
    apellido: "Hernández",
    correo: "papitas02@correo.com",
    identificacion: "87565",
    nombre: "Pablo",
    rol: Enum_Rol.estudiante,
    }).then((u) => {
        console.log("Usuario creado", u);
    }).catch(e =>{
        console.error("Error", e);
    }); */

    //OBTENER LOS USUARIOS
/*  await UserModel.find().then((u)=> {
        console.log("usuarios", u);
    }).catch(e => {
        console.error("error", e)
    }); */

    //OBTENER UN SOLO USUARIO
/*  await UserModel.findOne({identificacion:"8736r3"})
    .then(u=>{
        console.log("Usuario Encontrado", u);
    }).catch(e=>{
        console.error(e);
    }); */

    //EDITAR UN USUARIO
/*  await UserModel.findOneAndUpdate(
        {identificacion:"8736r3"},
        {correo: "ashu18@nlanguagechange",}
    ).then(u=>{
        console.log("Usuario Actualizado", u);
    }).catch(e=>{
        console.error("Error Actualizando", e)
    }); */

    //ELIMINAR UN USUARIO
/*  await UserModel.findOneAndDelete({correo: "ola@onlanguagechange.com"})
    .then(u=>{
        console.log("Usuario Eliminado", u);
    }).catch(e=>{
        console.error("Eroor Eliminando", e);
    }) */

