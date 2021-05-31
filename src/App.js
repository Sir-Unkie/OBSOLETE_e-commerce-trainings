import React from 'react';
import './App.css';
import HomePage from './Pages/homepage.component';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <HomePage></HomePage>
      </Route>
      <Route path='/ttt'>
        <div>ttttt</div>
      </Route>
    </Switch>
  );
}

export default App;
