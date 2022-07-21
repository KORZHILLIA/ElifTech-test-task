import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { toastConfig } from 'shared/services/api/utils/toastConfig';
import { addOrderToApi } from '../../shared/services/api/shops-api';

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
