import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import SearchResults from './components/SearchResult';

import './assets/vendor/reboot.min.css';
import './assets/vendor/grid.min.css';
import './App.css';

function App() {
  const RedirectToMain = _ => {
    return (
        <Redirect to="/" />
    );
}
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search-results/:slug" component={SearchResults} />
          <Route exact path="/search-results" component={RedirectToMain} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
