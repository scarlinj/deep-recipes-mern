import React from 'react';
import { useParams } from 'react-router-dom';

const SingleRecipe = props => {
  
  const { id: recipeId } = useParams();
  console.log(recipeId);

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            Username
          </span>{' '}
          recipe on createdAt
        </p>
        <div className="card-body">
          <p>Recipe Text</p>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
