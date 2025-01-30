import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the API base URL
const apiUrl = 'http://localhost:5000/products';

// Fetch products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get(apiUrl);
    return response.data;
  }
);

// Add product
export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (newProduct) => {
    const response = await axios.post(apiUrl, newProduct); // POST request to add product
    return response.data; // Return the added product
  }
);

// Update product
export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (updatedProduct) => {
    const response = await axios.put(`${apiUrl}/${updatedProduct.id}`, updatedProduct); // PUT request to update product
    return response.data; // Return the updated product
  }
);

// Delete product
export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (productId) => {
    await axios.delete(`${apiUrl}/${productId}`); // DELETE request to remove product
    return productId; // Return the id of the deleted product to remove from the Redux state
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
    // Additional reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items.push(action.payload); // Add the new product to the state
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.items.findIndex((product) => product.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload; // Replace the old product with the updated one
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Remove the deleted product from the state
        state.items = state.items.filter((product) => product.id !== action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
