import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts:[],
    products: [],
    allCategory:[],
    searchProduct: [],
    isLoading: false,
    isSuccess: false,
    isDeleted: false,
    isUpdate: false,
    isSearch: false,
    isAdd: false,
  },
  reducers: {
    getAllCategoryFetch: (state) => {
      state.isLoading = true;
    },
    getAllCategorySuccess: (state, action) => {
      state.allCategory = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },
    getAllCategoryFailure: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
    },
    getAllProductsFetch: (state) => {
      state.isLoading = true;
    },
    getAllProductsSuccess: (state, action) => {
      state.allProducts = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },
    getAllProductsFailure: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
    },
    getProductsFetch: (state) => {
      state.isLoading = true;
    },
    getProductsSuccess: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },
    getProductsFailure: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
    },
    deleteProductsFetch: (state) => {
      state.isLoading = true;
      state.isDeleted = false;
    },
    deleteProductsSuccess: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
      state.isDeleted = true;
    },
    deleteProductsFailure: (state) => {
      state.isLoading = false;
      state.isDeleted = false;
    },
    UpdateProductsFetch: (state) => {
      state.isLoading = true;
      state.isUpdate = false;
    },
    UpdateProductsSuccess: (state) => {
      state.isLoading = false;
      state.isUpdate = true;
      console.log("action.payload success");
    },
    UpdateProductsFailure: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isUpdate = false;
      console.log("action.payload fail");
    },
    onAddProduct: (state) => {
      state.isLoading = true;
      state.isAdd = false;
    },
    onAddProductSuccess: (state, action) => {
      state.products = [...state.products, action.payload];
      state.isLoading = false;
      state.isAdd = true;
      console.log("action.payload success");
    },
    onAddProductFailure: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isAdd = false;
      console.log("action.payload fail");
    },
    onSearchProduct: (state) => {
      state.isSearch = false;
    },
    onSearchProductSuccess: (state, action) => {
      state.searchProduct = action.payload;
      state.isSearch = true;
    },
    onSearchProductFailure: (state) => {
      state.isSuccess = false;
      state.isSearch = false;
    },
  },
});

export const {
  getAllCategoryFetch,
  getAllCategorySuccess,
  getAllCategoryFailure,
  getAllProductsFetch,
  getAllProductsSuccess,
  getAllProductsFailure,
  getProductsFetch,
  getProductsSuccess,
  getProductsFailure,
  deleteProductsFetch,
  deleteProductsSuccess,
  deleteProductsFailure,
  UpdateProductsFetch,
  UpdateProductsSuccess,
  UpdateProductsFailure,
  onSearchProduct,
  onSearchProductSuccess,
  onSearchProductFailure,
  onAddProduct,
  onAddProductSuccess,
  onAddProductFailure,
} = productsSlice.actions;
export default productsSlice.reducer;
