// React no longer needs to be imported since version 17, but many codebases are not yet updated
// import React below
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_RECIPES, QUERY_ME_BASIC } from '../utils/queries';
import RecipeList from '../components/RecipeList';
import RecipeForm from '../components/RecipeForm';
import Auth from '../utils/auth';

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_RECIPES);
  // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  const { data: userData } = useQuery(QUERY_ME_BASIC);

  const recipes = data?.recipes || [];
  console.log(recipes);

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <RecipeForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <RecipeList recipes={recipes} title="Some Food for Recipe(s)..." />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
