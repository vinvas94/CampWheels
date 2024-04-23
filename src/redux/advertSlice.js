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
  name: 'advert',
  initialState: {
    advert: [],
    isLoading: false,
    error: null,
  },

  extra: builder => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.advert = action.payload;
        state.isLoading = false;
      })
      .addMatcher(action => action.type.endsWith('pending', handlePending))
      .addMatcher(action => action.type.endsWith('rejected', handleRejected));
  },
});

export const advertReducer = advertSlice.reducer;
export const getAdvert = state => state.advert.advert;
export const getLoading = state => state.advert.isLoading;
export const getError = state => state.advert.error;
