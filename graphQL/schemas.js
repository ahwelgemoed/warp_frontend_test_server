const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Vehicle {
    id: ID
    manufacturer: String
    model: String
    body: String
    wiki: String
    img: String
    price: Int
  }

  type Query {
    allVehicles: [Vehicle]
    aVehicle(id: ID): Vehicle
  }
`;
module.exports = typeDefs;
