import conectarBD from "./db/db";
import UserModel from "./models/user";
import {Enum_EstadoUsuario, Enum_Rol} from "./models/enums";
import { ProyectModel } from "./models/proyect";
import { ObjectId } from "mongoose"; 

const main = async () => {
    await conectarBD();

    const usuarioInicial = await UserModel.create({
        nombre: "Andrea",
        apellido: "Fernández",
        correo: "andreafernandez427@gmail.com",
        identificacion: 12345,
        rol: Enum_Rol.administrador,
        estado: Enum_EstadoUsuario.autorizado,
    });

    const proyecto = await ProyectModel.create({
        nombre: "Proyecto Misión Tic",
        fechaInicio: new Date("2021/12/24"),
        fechaFin: new Date("2022/12/24"),
        presupuesto: 120000,
        lider: usuarioInicial._id,
    });

    console.log(proyecto);

// CREAR UN PROYECTO
/*  ProyectModel.create({
        nombre:"Proyecto 2",
        presupuesto: 120,
        fechaInicio: Date.now(),
        fechaFin: new Date("2022/11/10"),
        lider: "6195eb1316f5af35de91d4c1",
    }); */

// ENCONTRAR UN PROYECTO
 /* const proyecto = await ProyectModel.find({nombre: "Proyecto 2"}).populate("lider");
    console.log("El proyecto es: ", proyecto); */

/*   const lider = await UserModel.find({
        _id: proyecto[0].lider
    }); */
/*    console.log("El lider del proyecto es: ", lider); */
};
main();

// CRUD USUARIOS

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

