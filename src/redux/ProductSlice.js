import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";


export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get("https://api.pujakaitem.com/api/products");
    return response.data;
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isloading: false,
        error: null,
    },
    extraReducers(builder) {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isloading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isloading = false
            // Add any fetched posts to the array
            state.products = action.payload
            state.error = null;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isloading = false;
            state.products = [];
            state.error = action.error.message;
        });
    }
});

export default productSlice.reducer;
