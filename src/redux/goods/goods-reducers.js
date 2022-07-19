import { createReducer } from '@reduxjs/toolkit';
import { addGood, deleteGood, changePrice } from './goods-actions';

export const goodsReducer = createReducer([], {
  [addGood]: (store, { payload }) => [...store, payload],
  [changePrice]: (store, { payload: { id, number } }) => {
    const requiredGood = store.find(good => good.id === id);
    requiredGood.totalPrice = (requiredGood.price * number).toFixed(2);
    return store;
  },
  [deleteGood]: (store, { payload }) =>
    store.filter(good => good.id !== payload),
});
