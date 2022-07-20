import { createAction } from '@reduxjs/toolkit';

export const addGood = createAction('goods/add');

export const changePrice = createAction('goods/changePrice');
export const deleteGood = createAction('goods/delete');
export const clearGoods = createAction('goods/clear');
