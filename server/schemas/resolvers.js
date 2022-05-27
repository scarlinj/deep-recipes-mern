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
    login: async () => {},
  },
};

module.exports = resolvers;
