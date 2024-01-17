import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://65a6efd494c2c5762da61054.mockapi.io/api/';

export const fetchAdverts = createAsyncThunk(
    "adverts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/adverts');
            console.log(response.data)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)