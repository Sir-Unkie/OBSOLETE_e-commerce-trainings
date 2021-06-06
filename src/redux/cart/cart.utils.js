export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItemIndex = cartItems.findIndex(elem => {
    return elem.id === cartItemToAdd.id;
  });
  let updatedCart = [];
  if (existingCartItemIndex !== -1) {
    updatedCart = [...cartItems];
    updatedCart[existingCartItemIndex].quantity++;
    return updatedCart;
  } else {
    return (updatedCart = [...cartItems, { ...cartItemToAdd, quantity: 1 }]);
  }
};

export const removeCartItem = (cartItems, itemToRemove) => {
  return cartItems.filter(elem => elem.id !== itemToRemove.id);
};

export const decreaseItem = (cartItems, itemToDecrease) => {
  const index = cartItems.findIndex(elem => elem.id === itemToDecrease.id);
  const newCartItems = [...cartItems];
  if (newCartItems[index].quantity === 1) {
    return cartItems.filter(elem => elem.id !== itemToDecrease.id);
  } else {
    newCartItems[index].quantity--;
    return newCartItems;
  }
};
