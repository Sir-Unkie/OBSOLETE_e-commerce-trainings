import React, { Fragment } from 'react';
import './App.css';
import HomePage from './Pages/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './Pages/shop/shop.component';
import Header from './Components/header/Header.component';
import SignInSignUp from './Pages/sign-in-sign-up-page/SignInSignUp.component';

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path='/signin' component={SignInSignUp} />
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
