//import react libraries
import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import main sass file
import './scss/main.scss';

//import pages
import Home from './pages/home';
import About from './pages/about';
import Credits from './pages/credits';
import Error from './pages/error';

//import components
import Header from './components/header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/credits'>
          <Credits />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
