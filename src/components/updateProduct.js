import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Update product on the server
export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (updatedProduct) => {
    const response = await axios.put(`http://localhost:5000/products/${updatedProduct.id}`, updatedProduct);
    return response.data; // Return the updated product
  }
);

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Your other reducers
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Update the product in the state
        const index = state.items.findIndex((product) => product.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload; // Replace the old product with the updated one
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
