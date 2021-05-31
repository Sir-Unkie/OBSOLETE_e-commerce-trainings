import React, { Fragment } from 'react';
import './App.css';
import HomePage from './Pages/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './Pages/shop/shop.component';
import Header from './Components/header/Header.component';

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
