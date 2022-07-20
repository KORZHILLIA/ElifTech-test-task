import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'cart',
  storage,
};

const persistedGoods = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    goods: persistedGoods,
  },
});

export const persistor = persistStore(store);
