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

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      recipes {
        _id
        recipeText
        createdAt
        commentCount
        comments {
          _id
          createdAt
          commentBody
          username
        }
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

// export const QUERY_USER = gql`
//   {
//     me {
//       _id
//       username
//       email
//       recipes {
//         _id
//         recipeText
//         createdAt
//         commentCount
//         comments {
//           _id
//           createdAt
//           commentBody
//           username
//         }
//       }
//     }
//   }
// `;

export const QUERY_USER_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;