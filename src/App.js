import React from 'react';
import './App.css';
import HomePage from './Pages/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './Pages/shop/shop.component';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>
  );
}

export default App;
