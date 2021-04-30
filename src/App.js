import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Owners from './components/Owners';
import Pets from './components/Pets';

const App = () => (
  <div>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/owners" component={Owners} />
        <Route path="/pets" component={Pets} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
