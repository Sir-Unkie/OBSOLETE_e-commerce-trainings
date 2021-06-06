import './CartDropdown.styles.scss';
import React from 'react';
import CustomButton from '../custom-button/CustomButton.component';
import CartItem from '../cartItem/CartItem.component';
import { connect } from 'react-redux';

const CartDropdown = props => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {props.cartItems.map(cartItem => {
          return <CartItem key={cartItem.id} item={cartItem}></CartItem>;
        })}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
