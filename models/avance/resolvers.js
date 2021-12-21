import { AdvancementModel } from './avance.js';

const resolversAvance = {
    Query:{
        Avances: async (parent, args) => {
            const avances =  await AdvancementModel.find().populate('proyecto').populate('creadoPor');
            return avances;
        },
        filtrarAvance: async (parents, args) => {
            const avanceFiltrado = await AdvancementModel.find({ proyecto: args._id })
              .populate('proyecto')
              .populate('creadoPor');
            return avanceFiltrado;
          },
},
    Mutation: {
        crearAvance: async (parent, args) => {
            const avanceCreado =  await AvanceModel.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
            });
            return avanceCreado;
        },

        editarAvance: async (parent, args) => {
            const avanceEditado = await AvanceModel.findByIdAndUpdate(args._id, {
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
            },
            { new: true }
            );
                return avanceEditado;
        },
        eliminarAvance: async (parent, args) => {
            const avanceEliminado = await AvanceModel.findByIdAndDelete(args._id);
             return avanceEliminado;
         
         },
    },
};

export { resolversAvance };