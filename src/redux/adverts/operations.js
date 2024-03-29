import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



axios.defaults.baseURL = 'https://65a6efd494c2c5762da61054.mockapi.io/api/';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (page, thunkAPI) => {
    try {
      const { page, limit } = thunkAPI.getState().adverts;
      const response = await axios.get('/adverts', {
        params: {
          page,
          limit,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetcherAllCars = createAsyncThunk(
  '/cars',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/cars?page=${page}&limit=12`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



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

export const addFavoritesbyId = createAsyncThunk(
  "adverts/fetchFavoritesbyId",
  async (advertId, thunkAPI) => {
      try {
          const response = await axios.get(`/adverts/${advertId}`);
          return response.data;
      } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
      }
  }
)

export const loadMoreAdverts = createAsyncThunk(
  'adverts/loadMore',
  async (_, thunkAPI) => {
    try {
      const { page, limit } = thunkAPI.getState().adverts;
      const response = await axios.get('/adverts', {
        params: {
          page: page + 1, 
          limit,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);