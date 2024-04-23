import { createSlice } from '@reduxjs/toolkit/dist';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    location: '',
    checkBox: {
      ac: false,
      automatic: false,
      kitchen: false,
      tv: false,
      bathroom: false,
    },
    radio: {
      van: false,
      fullyIntegrated: false,
      alcove: false,
    },
    reducer: {
      startFilter(_, action) {
        return action.payload;
      },
    },
  },
});

export const { startFilter } = filterSlice.actions;
export const filter = state => state.filter;
export const filterReducer = filterSlice.reducer;
