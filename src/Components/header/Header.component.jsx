import React from 'react';
import './Header.style.scss';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = props => {
  const signOutHandler = () => {
    auth.signOut();
  };

  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo'></Logo>
      </Link>
      <div className='options'>
        <NavLink activeClassName='selected' to='/shop' className='option'>
          SHOP
        </NavLink>
        <NavLink activeClassName='selected' exact to='/' className='option'>
          CONTACT
        </NavLink>
        {!props.currentUser ? (
          <NavLink activeClassName='selected' to='/signin' className='option'>
            SIGN IN
          </NavLink>
        ) : (
          <div className='option' onClick={signOutHandler}>
            SIGN OUT
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
