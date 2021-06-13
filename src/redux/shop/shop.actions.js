import { shopActionTypes } from './shop.types.js';

export const updateShopCollections = shopCollections => ({
  type: shopActionTypes.UPDATE_SHOP_COLLECTIONS,
  payload: shopCollections,
});
