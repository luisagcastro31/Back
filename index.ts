import conectarBD from "./db/db";
import UserModel from "./models/user";

const main = async () => {
    await conectarBD();

    UserModel.create({
        correo:"ola@onlanguagechange.com",
        identificacion: "8736r",
        nombre: "Luisa",
        apellido: "Castro",
    }).then((u) => {
        console.log("Usuario Creado", u);
    }).catch(e =>{
        console.error("Error");
    })
};

main();