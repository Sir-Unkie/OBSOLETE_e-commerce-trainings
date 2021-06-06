import React from 'react';
import './CollectionItem.style.scss';
import CustomButton from '../custom-button/CustomButton.component';
import { addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CollectionItem = props => {
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      ></div>
      <div className='collection-footer'>
        <span className='name'>{props.name}</span>
        <span className='price'>{props.price}</span>
      </div>
      <CustomButton isInverted onClick={props.addItem.bind(null, props.item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
