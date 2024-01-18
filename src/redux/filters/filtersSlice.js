import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        selectedOption: "",
    },
    reducers: {
        setSelectedOption: (state, action) => {
            state.selectedOption = action.payload;
        }
    }

})

export const { setSelectedOption } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;