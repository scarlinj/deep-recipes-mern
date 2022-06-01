import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_RECIPE } from "../utils/queries";
import CommentList from "../components/CommentList";
import { useParams } from "react-router-dom";

const SingleRecipe = (props) => {
  
  const { id: recipeId } = useParams();
  console.log(recipeId);

  const { loading, data } = useQuery(QUERY_RECIPE, {
    variables: { id: recipeId },
  });

  const recipe = data?.recipe || {};
  console.log("food", data);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {recipe.username}
            {/* recipe.createdAt not calling, this is stopping the whole forward motion */}
          </span>
          {""}
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

export default SingleRecipe;
