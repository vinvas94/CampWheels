import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../services/Api';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const advertSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.adverts = action.payload;
        state.isLoading = false;
      })
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export const advertReducer = advertSlice.reducer;
export const getAdvert = state => state.adverts.adverts;
export const getLoading = state => state.adverts.isLoading;
export const getError = state => state.adverts.error;
