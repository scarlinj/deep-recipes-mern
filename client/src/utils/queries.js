// this file will store all GraphQL query requests

import { gql } from '@apollo/client';

export const QUERY_RECIPES = gql`
  query recipes($username: String) {
    recipes(username: $username) {
      _id
      recipeText
      createdAt
      username
      commentCount
      comments {
        _id
        createdAt
        username
        commentBody
      }
    }
  }
`;

export const QUERY_RECIPE = gql`
  query recipe($id: ID!) {
    recipe(_id: $id) {
      _id
      recipeText
      createdAt
      username
      commentCount
      comments {
        _id
        createdAt
        username
        commentBody
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      recipes {
        _id
        recipeText
        createdAt
        commentCount
      }
    }
  }
`;