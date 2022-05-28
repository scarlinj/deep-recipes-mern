// React no longer needs to be imported since version 17, but many codebases are not yet updated
// import React below
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_RECIPES } from '../utils/queries';

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_RECIPES);
  // optional chaining method below. Node may get syntax error.
  const recipes = data?.recipes || [];
  console.log(recipes);

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>{/* PRINT RECIPE LIST */}</div>
      </div>
    </main>
  );
};

export default Home;
