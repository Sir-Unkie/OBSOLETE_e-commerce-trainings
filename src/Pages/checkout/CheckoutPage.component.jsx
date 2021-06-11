import './CheckoutPage.styles.scss';
import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../Components/checkout-item/CheckoutItem.component';
import StripeButton from '../../Components/StripeButton/StripeButton.component';

const CheckoutPage = props => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {props.cartItems.map(cartItem => (
        <CheckoutItem
          key={cartItem.id}
          item={cartItem}
          quantity={cartItem.quantity}
        />
      ))}
      <div className='total'>
        <span>TOTAL: ${props.cartTotal}</span>
      </div>
      <div className='test-warning'>
        *Please use the following test credit card for payments <br />
        4242 4242 4242 4242 - Exp: any date - CVV:123
      </div>
      <StripeButton price={props.cartTotal} />
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
  cartTotal: selectCartTotal(state),
});

export default connect(mapStateToProps)(CheckoutPage);
