import { gql } from 'apollo-server-express';

const tiposInscripcion = gql`
  type Inscripcion {
    _id: ID!
    estado: Enum_EstadoInscripcion!
    fechaIngreso: Date
    fechaEgreso: Date
    proyecto: Proyecto!
    estudiante: Usuario!
  }
  type Query {
    Inscripciones: [Inscripcion]
    Inscripcion(_id:String!): Inscripcion
  }
  type Mutation {
    crearInscripcion(
      estado: Enum_EstadoInscripcion!
      proyecto: String!
      estudiante: String!
    ): Inscripcion
    aprobarInscripcion(
      id: String!
    ): Inscripcion
    eliminarInscripcion(
      _id: String,
    ): Inscripcion
    editarInscripcion(
      _id: String!
      estado: Enum_EstadoInscripcion!
      fechaIngreso: Date
      fechaEgreso: Date
      proyecto: String!
      estudiante: String!
  ): Usuario
    
  }
`;

export { tiposInscripcion };
