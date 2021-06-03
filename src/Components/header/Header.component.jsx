import React from 'react';
import './Header.style.scss';
import { Link } from 'react-router-dom';
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
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/' className='option'>
          CONTACT
        </Link>
        {!props.currentUser ? (
          <Link to='/signin' className='option'>
            SIGN IN
          </Link>
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
