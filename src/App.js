import React, { Fragment } from 'react';
import './App.css';
import HomePage from './Pages/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './Pages/shop/shop.component';
import Header from './Components/header/Header.component';
import SignInSignUp from './Pages/sign-in-sign-up-page/SignInSignUp.component';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';
// import { render } from '@testing-library/react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      this.setState({ currentUser: user });
      await createUserProfileDocument(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Fragment>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/signin' component={SignInSignUp} />
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
