import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setPage } from "./advertsSlice";


axios.defaults.baseURL = 'https://65a6efd494c2c5762da61054.mockapi.io/api/';

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { page, limit } = thunkAPI.getState().adverts;
      const response = await axios.get('/adverts', {
        params: {
          page,
          limit,
        },
      });

      thunkAPI.dispatch(setPage(page + 1));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// async function fetchAll(page = 1, limit = 12) {
//   const { data } = await axios.get('/advert', {
//     params: {
//       page,
//       limit,
//     },
//   });
//   return data;
// }

// export const fetchAdverts = createAsyncThunk(
//   "adverts", async ({ page, limit },
//     { rejectWithValue }) => {
//     try {
//       const { adverts } = await fetchAll(page, limit);
//       return adverts;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const fetchAdvertbyId = createAsyncThunk(
  "adverts/fetchAdvertbyId",
  async (advertId, thunkAPI) => {
      try {
          const response = await axios.get(`/adverts/${advertId}`);
          return response.data;
      } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
      }
  }
)

export const addFavorites = createAsyncThunk(
    'adverts/addFavorites',
    async (advert, thunkAPI) => {
      try {
        const response = await axios.post('/favorites', advert);
        return response.data; 
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const fetchFavorites = createAsyncThunk(
    "adverts/fetchFavorites",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/favorites');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const deleteFavorites = createAsyncThunk(
    'adverts/deleteFavorites',
    async (advertId, thunkAPI) => {
      try {
       await axios.delete(`/favorites/${advertId}`);
        return {advertId};
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  )

  export const loadMoreAdverts = createAsyncThunk(
    "adverts/loadMore",
    async (_, thunkAPI) => {
      try {
        const { page, limit } = thunkAPI.getState().adverts;
  
        const response = await axios.get('/adverts', {
          params: {
            page,
            limit,
          },
        });
  
        thunkAPI.dispatch(setPage(page + 1));
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );