import { createReducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { toastConfig } from 'shared/utils/toastConfig';
import { addGood, deleteGood, changePrice, clearGoods } from './goods-actions';

export const goodsReducer = createReducer([], {
  [addGood]: (store, { payload }) => {
    const isGoodPresent = store.find(good => good.id === payload.id);
    if (!isGoodPresent) {
      return [...store, payload];
    }
    toast.error('This good is in the cart already', toastConfig);
    return store;
  },
  [changePrice]: (store, { payload: { value, id } }) => {
    const requiredGood = store.find(good => good.id === id);
    requiredGood.quantity = value;
    requiredGood.totalPrice = (
      requiredGood.price * requiredGood.quantity
    ).toFixed(2);
    return store;
  },
  [deleteGood]: (store, { payload }) =>
    store.filter(good => good.id !== payload),
  [clearGoods]: () => [],
});
