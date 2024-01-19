import { createSlice } from '@reduxjs/toolkit';
import { addFavorites, fetchAdverts, fetchFavorites } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    favororiteItems: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchAdverts.rejected, handleRejected)

      .addCase(addFavorites.pending, handlePending)
      .addCase(addFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favororiteItems.push(action.payload);
      })
      .addCase(addFavorites.rejected, handleRejected)

      .addCase(fetchFavorites.pending, handlePending)
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favororiteItems = action.payload;
      })
      .addCase(fetchFavorites.rejected, handleRejected)
  },
});

export const advertsReducer = advertsSlice.reducer;
