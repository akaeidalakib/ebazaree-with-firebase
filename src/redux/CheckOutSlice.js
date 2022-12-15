import { createSlice } from '@reduxjs/toolkit';
const checkOutSlice = createSlice({
    name: 'checkout',
    initialState: {
        checkout: [],
    },
    reducers: {
        addTocheckOut: (state, action) => {
            state.checkout.push({ ...action.payload });
        },
    },
});
export const checkOutReducer = checkOutSlice.reducer;
export const { addTocheckOut } = checkOutSlice.actions;