import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_RECIPES } from '../utils/queries';

import RecipeList from '../components/RecipeList';

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_RECIPES);

  const recipes = data?.recipes || [];
  console.log(recipes);

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <RecipeList recipes={recipes} title="Some Feed for Recipe(s)..." />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
