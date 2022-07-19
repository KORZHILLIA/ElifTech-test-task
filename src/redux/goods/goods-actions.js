import { createAction } from '@reduxjs/toolkit';

export const addGood = createAction('goods/add');

export const changePrice = createAction(
  'goods/changePrice',
  function prepare(number, id) {
    return { payload: { number, id } };
  }
);
export const deleteGood = createAction('goods/delete');
