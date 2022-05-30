const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe } = require("../models");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('recipes')
          // .populate('friends');
    
        return userData;
      }
    
      throw new AuthenticationError('Not logged in');
    },
    // args requests the recipes for each the Username
    recipes: async(parent, args ) => {
      if (args.username) {
        // find all recipes where username matches recipe being passed in
        const recipes = await Recipe.find({ where: {username:args.username}})
        return recipes
      } else {
        const recipes = await Recipe.find()
        return recipes;
      }
    },

    recipe: async(parent, args ) => {
      if (args.username) {
        // find a single recipe where username matches recipe being passed in
        const recipe = await Recipe.find({ where: {username:args.username}})
        return recipe
      } else {
        const recipe = await Recipe.find()
        return recipe;
      }
    }, 
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
    
      return { token, user };
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
    
      const token = signToken(user);
      return { token, user };
    },
    addRecipe: async (parent, args, context) => {
      if (context.user) {
        const recipe = await Recipe.create({ ...args, username: context.user.username });
    
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { recipes: recipe._id } },
          { new: true }
        );
    
        return recipe;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
    
    addComment: async (parent, { recipeId, commentBody }, context) => {
      if (context.user) {
        const updatedRecipe = await Recipe.findOneAndUpdate(
          { _id: recipeId },
          { $push: { comments: { commentBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );
    
        return updatedRecipe;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    }
    },
  };

// previous code
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
