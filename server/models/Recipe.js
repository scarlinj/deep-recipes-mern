const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const recipeSchema = new Schema(
  {
    recipeText: {
      type: String,
      required: 'You need to leave a recipe!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

recipeSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
