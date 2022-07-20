import { combineReducers } from 'redux';
import { goodsReducer } from './goods/goods-reducers';
import {
  orderReducers,
  loadingReducers,
  errorReducers,
} from './orders/orders-reducers';

export const rootReducer = combineReducers({
  cart: goodsReducer,
  createdOrders: orderReducers,
  loading: loadingReducers,
  error: errorReducers,
});
