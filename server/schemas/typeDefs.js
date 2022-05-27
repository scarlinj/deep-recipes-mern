// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    recipes: [Recipe]
    friends: [User]
  }

  type Recipe {
    _id: ID
    recipeText: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    recipes(username: String): [Recipe]
    recipe(_id: ID!): Recipe
  }

  type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
  }
`;
// export the typeDefs
module.exports = typeDefs;
