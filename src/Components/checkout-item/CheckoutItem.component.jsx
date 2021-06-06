import React from 'react';
import './CheckoutItem.styles.scss';

const CheckoutItem = props => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={props.item.imageUrl} alt='item' />
      </div>
      <span className='name'>{props.item.name}</span>
      <span className='quantity'>{props.item.quantity}</span>
      <span className='price'>{props.item.price}</span>
      <div className='remove-button'>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
