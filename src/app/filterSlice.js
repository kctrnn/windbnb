import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    location: '',
    maxGuests: 0,
  },

  reducers: {
    addLocation: (state, action) => {
      state.location = action.payload;
    },

    addGuests: (state, action) => {
      state.maxGuests = action.payload;
    },
  },
});

export const { addLocation, addGuests } = filterSlice.actions;

export default filterSlice.reducer;
