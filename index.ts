import conectarBD from "./db/db";
import UserModel from "./models/user";

const main = async () => {
    await conectarBD();

    // CREAR UN USUARIO    
/*     UserModel.create({
        correo:"ola@onlanguagechange.com",
        identificacion: "8736r",
        nombre: "Luisa",
        apellido: "Castro",
    }).then((u) => {
        console.log("Usuario creado", u);
    }).catch(e =>{
        console.error("Error");
    }); */

    //OBTENER LOS USUARIOS
    await UserModel.find().then((u)=> {
        console.log("usuarios", u);
    }).catch(e => {
        console.error("error", e)
    });
};

main();