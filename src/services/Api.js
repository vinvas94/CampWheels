import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://661d84f998427bbbef0209d3.mockapi.io/api/v1/';

export const fetchData = createAsyncThunk(
  'advert',

  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/advert');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
