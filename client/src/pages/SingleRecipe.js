import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_RECIPE } from '../utils/queries';
import { useParams } from 'react-router-dom';
import CommentList from '../components/CommentList';

const SingleRecipe = (props) => {
  
  const { id: recipeId } = useParams();

  // console.log(recipeId);
  const { loading, data } = useQuery(QUERY_RECIPE, {
    // The id property on the variables object will become the $id parameter in the GraphQL query
    variables: { id: recipeId }
  });
  
  const recipe = data?.recipe || {};
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {recipe.username}
         
            {/* recipe.createdAt not calling on page */}
          </span>{' '}
          recipe on {recipe.createdAt}
        </p>
        <div className="card-body">
          <p>{recipe.recipeText}</p>
        </div>
      </div>

      {recipe.commentCount > 0 && <CommentList comments={recipe.comments} />}
    </div>
  );
};
console.log(SingleRecipe);
export default SingleRecipe;
