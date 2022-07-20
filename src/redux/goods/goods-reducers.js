import { createReducer } from '@reduxjs/toolkit';
import { addGood, deleteGood, changePrice, clearGoods } from './goods-actions';

export const goodsReducer = createReducer([], {
  [addGood]: (store, { payload }) => [...store, payload],
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
