import './CartDropdown.styles.scss';
import React from 'react';
import CustomButton from '../custom-button/CustomButton.component';
import CartItem from '../cartItem/CartItem.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import toggleCartHidden from '../../redux/cart/cart.actions';

const CartDropdown = props => {
  const goToCheckoutHandler = () => {
    if (props.history.location.pathname !== '/checkout') {
      props.toggleCartHidden();
      props.history.push('/checkout');
    }
  };
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {props.cartItems.length !== 0 ? (
          props.cartItems.map(cartItem => {
            return <CartItem key={cartItem.id} item={cartItem}></CartItem>;
          })
        ) : (
          <div className='empty-message'>Your cart is empty</div>
        )}
      </div>
      <CustomButton onClick={goToCheckoutHandler}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
