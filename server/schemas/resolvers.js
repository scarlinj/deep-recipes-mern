const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe } = require("../models");

const resolvers = {
  Query: {
    // logic here remains the same
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
    },
    login: async (parent, { email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new AuthenticationError('Incorrect credentials');
  }

  const correctPw = await user.isCorrectPassword(password);

  if (!correctPw) {
    throw new AuthenticationError('Incorrect credentials');
  }

  return user;
},
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
    
      return user;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
    
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const correctPw = await user.isCorrectPassword(password);
    
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      return user;
    },
    },
  };
// const resolvers = {
//   Query: {
//     recipes: async (parent, { username }) => {
//       const params = username ? { username } : {};
//       return Recipe.find(params).sort({ createdAt: -1 });
//     },
//     // place this inside of the `Query` nested object right after `recipes`
//     recipe: async (parent, { _id }) => {
//       return Recipe.findOne({ _id });
//     },
//     // get all users
//     users: async () => {
//       return User.find()
//         .select("-__v -password")
//         .populate("friends")
//         .populate("recipes");
//     },
//     // get a user by username
//     user: async (parent, { username }) => {
//       return User.findOne({ username })
//         .select("-__v -password")
//         .populate("friends")
//         .populate("recipes");
//     }
//   },
//   Mutation: {
//     addUser: async (parent, args) => {
//       const user = await User.create(args);
    
//       return user;
//     },
//     login: async () => {
  
//     }
//   },
// };

module.exports = resolvers;
