import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'https://65a6efd494c2c5762da61054.mockapi.io/api/';

export const fetchAdverts = createAsyncThunk(
    "adverts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/adverts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

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

