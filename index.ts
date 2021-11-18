import conectarBD from "./db/db";
import UserModel from "./models/user";
import {Enum_Rol} from "./models/enums";

const main = async () => {
    await conectarBD();

// CREAR UN USUARIO    
/* await UserModel.create({
    apellido: "Peréz",
    correo: "pj@skje.com",
    identificacion: "52634r",
    nombre: "Carlos",
    rol: Enum_Rol.lider,
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
    await UserModel.findOneAndDelete({correo: "ola@onlanguagechange.com"})
    .then(u=>{
        console.log("Usuario Eliminado", u);
    }).catch(e=>{
        console.error("Eroor Eliminando", e);
    })
};

main();