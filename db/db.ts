import {connect} from 'mongoose';

const conectarBD = async ()=>{
    return await connect(
        "mongodb+srv://Usar1:12345@bd-paginaweb.mbp91.mongodb.net/BD-PaginaWeb?retryWrites=true&w=majority"
    ).then(()=>{
        console.log("Conexión Exitosa");
    }).catch((e)=>{
        console.error("Error conectando a la BD", e);
    });
};

export default conectarBD;
