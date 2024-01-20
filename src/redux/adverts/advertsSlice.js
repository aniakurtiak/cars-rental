import {createSlice } from '@reduxjs/toolkit';
import {addFavorites, deleteFavorites, fetchAdvertbyId, fetchAdverts, fetchFavorites } from './operations';


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
    itemById: {},
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


      .addCase(fetchAdvertbyId.pending, handlePending)
      .addCase(fetchAdvertbyId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.itemById = action.payload;
      })
      .addCase(fetchAdvertbyId.rejected, handleRejected)


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


      .addCase(deleteFavorites.pending, handlePending)
      .addCase(deleteFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const { advertId } = action.payload;
      
        const index = state.favororiteItems.findIndex(
          advert => advert.id === advertId
        );
        if (index !== -1) {
          state.favororiteItems.splice(index, 1);
        }
      })
  },
});

export const advertsReducer = advertsSlice.reducer;