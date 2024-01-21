import { createSlice } from '@reduxjs/toolkit';
import {
  addFavoritesbyId,
  fetchAdvertbyId,
  fetchAdverts,
  loadMoreAdverts,
} from './operations';

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
    favoriteItems: [],
    itemById: {},
    page: 1,
    limit: 12,
    isLoading: false,
    error: null, 
  },
  reducers: {
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    deleteFavorites(state, action) {
      state.favoriteItems = state.favoriteItems.filter(
        item => item.id !== action.payload
      );
    },
    setInitialLoad: (state, action) => {
      state.isInitialLoad = action.payload;
    },
    
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


      .addCase(loadMoreAdverts.pending, handlePending)
      .addCase(loadMoreAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...action.payload];
        state.page = state.page + 1;
      })
      .addCase(loadMoreAdverts.rejected, handleRejected)
   

      .addCase(fetchAdvertbyId.pending, handlePending)
      .addCase(fetchAdvertbyId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.itemById = action.payload;
      })
      .addCase(fetchAdvertbyId.rejected, handleRejected)


      .addCase(addFavoritesbyId.pending, (state, action) => {
        handlePending(state, action);
      })
      .addCase(addFavoritesbyId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favoriteItems = [...state.favoriteItems, action.payload];
      })
      .addCase(addFavoritesbyId.rejected, (state, action) => {
        handleRejected(state, action);
      });
  },
});

export const { deleteFavorites } = advertsSlice.actions;
export const { setLimit } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
