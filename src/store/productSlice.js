//store/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
  products: [],
  searchResults: [],
  categories: [],
  status: "idle",
  error: null,
};

// Thunks to fetch data from the APIs
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  }
);

export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    const response = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    return response.data;
  }
);

export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async (query) => {
    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${query}`
    );
    return response.data.products;
  }
);

export const fetchCategoryProducts = createAsyncThunk(
  "products/fetchCategoryProducts",
  async ({ category }) => {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${category}`
    );
    return response.data.products;
  }
);

// Slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        state.searchResults = [];
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.searchResults = action.payload;
      })
      .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
        state.searchResults = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
