const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    userName: String
    email: String
    password: String
    profilePic: String
  }

  type Housework {
    _id: ID
    name: String
    description: String
    frequency: String
    user: String
  }

  type Tools {
    _id: ID
    name: String
    description: String
    picture: String
    price: Float
    user: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    housework(_id: ID!): Housework
    tools(_id: ID!): Tools
  }

  type Mutation {
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
