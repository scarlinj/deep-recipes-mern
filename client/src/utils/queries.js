import { gql } from "@apollo/client";

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
