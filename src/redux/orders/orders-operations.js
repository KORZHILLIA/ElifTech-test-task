import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addOrderToApi } from '../../shared/services/api/shops-api';

const toastConfig = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 1500,
  delay: 500,
};

export const addOrder = createAsyncThunk(
  'orders/add',
  async (order, { rejectWithValue }) => {
    try {
      const addedOrder = await addOrderToApi(order);
      toast.success('Order successfully created', toastConfig);
      return addedOrder;
    } catch (error) {
      return rejectWithValue(toast.error('Order is unsuccessfull'));
    }
  }
);
