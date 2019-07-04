import React from 'react';

import Header from '../Header';
import SearchForm from '../SearchForm';

function Home() {
  return (
    <React.Fragment>
      <Header spacing={200} size={60} />
      <SearchForm />
    </React.Fragment>
  );
}

export default Home;
