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
