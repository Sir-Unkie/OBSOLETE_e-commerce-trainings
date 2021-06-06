import CartActionsTypes from './cart.Types';

const toggleCartHidden = () => ({
  type: CartActionsTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
  type: CartActionsTypes.ADD_ITEM,
  payload: item,
});

export default toggleCartHidden;
