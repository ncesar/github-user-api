import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import SearchResults from './components/SearchResult';

import './assets/vendor/reboot.min.css';
import './assets/vendor/grid.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search-results" component={SearchResults} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
