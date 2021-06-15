import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './Pages/homepage.component';
import { Redirect, Route, Switch } from 'react-router-dom';
import ShopPage from './Pages/shop/shop.component';
import Header from './Components/header/Header.component';
import SignInSignUp from './Pages/sign-in-sign-up-page/SignInSignUp.component';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './Pages/checkout/CheckoutPage.component';
// import { render } from '@testing-library/react';

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(user);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);

  return (
    <Fragment>
      <Header />
      <Switch>
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? (
              <Redirect exact to='/'></Redirect>
            ) : (
              <SignInSignUp></SignInSignUp>
            )
          }
        />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
