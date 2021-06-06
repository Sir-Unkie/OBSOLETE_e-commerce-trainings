import React from 'react';
import './CheckoutItem.styles.scss';
import { connect } from 'react-redux';
import {
  removeItem,
  decreaseItem,
  addItem,
} from '../../redux/cart/cart.actions';

const CheckoutItem = props => {
  const removeHandler = () => {
    props.removeItem(props.item);
  };
  const decreaseHandler = () => {
    props.decreaseItem(props.item);
  };

  const addHandler = () => {
    props.addItem(props.item);
  };
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={props.item.imageUrl} alt='item' />
      </div>
      <span className='name'>{props.item.name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={decreaseHandler}>
          &#10094;
        </div>
        <span className='value'>{props.quantity}</span>
        <div className='arrow' onClick={addHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'>{props.item.price}</span>
      <div className='remove-button' onClick={removeHandler}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  decreaseItem: item => dispatch(decreaseItem(item)),
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
