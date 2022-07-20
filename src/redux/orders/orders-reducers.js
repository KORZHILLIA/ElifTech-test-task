import { createReducer } from '@reduxjs/toolkit';
import { addOrder } from './orders-operations';

export const orderReducers = createReducer([], {
  [addOrder.fulfilled]: (store, { payload }) => [...store, payload],
});

export const loadingReducers = createReducer(false, {
  [addOrder.pending]: () => true,
});

export const errorReducers = createReducer(null, {
  [addOrder.rejected]: (_, { payload }) => payload,
});
