import React from 'react';

const RecipeList = ({ recipes, title }) => {
  if (!recipes.length) {
    return <h3>No Recipes Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {recipes &&
        recipes.map(recipe => (
          <div key={recipe._id} className="card mb-3">
            <p className="card-header">
              {recipe.username}
              recipe on {recipe.createdAt}
            </p>
            <div className="card-body">
              <p>{recipe.recipeText}</p>
              <p className="mb-0">
                Comments: {recipe.commentCount} || Click to{' '}
                {recipe.commentCount ? 'see' : 'start'} the discussion!
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RecipeList;