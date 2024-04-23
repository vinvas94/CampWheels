import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66282d0054afcabd0735107a.mockapi.io/api/v1/';

export const fetchData = createAsyncThunk('adverts', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/adverts');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
