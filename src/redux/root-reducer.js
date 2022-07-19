import { combineReducers } from 'redux';
import { goodsReducer } from './goods/goods-reducers';

export const rootReducer = combineReducers({
  cart: goodsReducer,
});
