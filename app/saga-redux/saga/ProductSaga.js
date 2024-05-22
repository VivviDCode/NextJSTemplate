import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  UpdateProductsFailure,
  UpdateProductsSuccess,
  deleteProductsFailure,
  deleteProductsSuccess,
  getProductsFailure,
  getProductsSuccess,
  onSearchProductSuccess,
  onSearchProductFailure,
  onAddProductSuccess,
  onAddProductFailure,
  getAllProductsFailure,
  getAllProductsSuccess,
  getAllCategoryFailure,
  getAllCategorySuccess,
} from "../redux/ProductsSlice";
import { toast } from "react-toastify";
const address = process.env.NEXT_PUBLIC_REMOTE_ID;
function* workGetAllCategoryFetch() {
  try {
    const response = yield call(fetch, `${address}products/categories`);
    const categoriesData = yield response.json();

    if (!response.ok) {
      throw new Error(categoriesData.message || "Failed to fetch categories");
    }

    yield put(getAllCategorySuccess(categoriesData));
  } catch (error) {
    yield put(getAllCategoryFailure(error.message));
  }
}

function* allCategorySaga() {
  yield takeEvery("products/getAllCategoryFetch", workGetAllCategoryFetch);
}
function* workGetAllProductFetch() {
  try {
    const Products = yield call(() =>
      fetch(`${address}products`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
    );

    if (!Products.ok) {
      const errorResponse = yield Products.json();
      const errorMessage = errorResponse.msg;
      yield put(getAllProductsFailure(errorMessage));
      throw new Error(errorMessage);
    }
    const ProductsData = yield Products.json();
    yield put(getAllProductsSuccess(ProductsData));
  } catch (error) {
    yield put(getAllProductsFailure(error.message));
  }
}
function* allProductsSaga() {
  yield takeEvery("products/getAllProductsFetch", workGetAllProductFetch);
}

function* workGetProductFetch({ payload }) {
  try {
    console.log(payload);
    const { limit, skip } = payload;
    const Products = yield call(() =>
      fetch(`${address}products?limit=${limit}&skip=${skip}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
    );

    if (!Products.ok) {
      const errorResponse = yield Products.json();
      const errorMessage = errorResponse.msg;
      yield put(getProductsFailure(errorMessage));
      throw new Error(errorMessage);
    }
    const ProductsData = yield Products.json();
    yield put(getProductsSuccess(ProductsData));
  } catch (error) {
    yield put(getProductsFailure(error.message));
  }
}
function* ProductsSaga() {
  yield takeEvery("products/getProductsFetch", workGetProductFetch);
}

function* workDeleteProductFetch({ payload }) {
  try {
    const Products = yield call(() =>
      fetch(`${address}products/${payload}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
    );

    if (!Products.ok) {
      const errorResponse = yield Products.json();
      const errorMessage = errorResponse.msg;
      yield put(deleteProductsFailure(errorMessage));
      throw new Error(errorMessage);
    }
    const ProductsData = yield Products.json();
    toast("Product Deleted Successfully...!");

    yield put(deleteProductsSuccess(ProductsData));
  } catch (error) {
    yield put(deleteProductsFailure(error.message));
    toast("Something Went Wrong...!");
  }
}
function* DeleteProductsSaga() {
  yield takeEvery("products/deleteProductsFetch", workDeleteProductFetch);
}

function* workUpdateProductFetch({ payload }) {
  const { title, itemId, description, price, category } = payload;

  try {
    const Products = yield call(() =>
      fetch(`${address}products/${itemId}`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          price,
          category,
        }),
      })
    );

    if (!Products.ok) {
      const errorResponse = yield Products.json();
      const errorMessage = errorResponse.msg;
      yield put(UpdateProductsFailure(errorMessage));
      throw new Error(errorMessage);
    }
    const ProductsData = yield Products.json();
    toast("Product Updated Successfully...!");

    yield put(UpdateProductsSuccess(ProductsData));
  } catch (error) {
    yield put(UpdateProductsFailure(error.message));
    toast("Something Went Wrong...!");
  }
}
function* UpdateProductsSaga() {
  yield takeEvery("products/UpdateProductsFetch", workUpdateProductFetch);
}
function* workSearchProductFetch({ payload }) {
  try {
    const products = yield call(() =>
      fetch(`${address}products/search?q=${payload}`, {
        method: "get",
        headers: { "Content-Type": "application/json" },
      })
    );
    if (!products.ok) {
      const errorResponse = yield products.json();

      const errorMessage = errorResponse.msg;
      yield put(UpdateProductsFailure(errorMessage));
      throw new Error(errorMessage);
    }
    const productData = yield products.json();
    yield put(onSearchProductSuccess(productData));
  } catch (error) {
    yield put(onSearchProductFailure(error.message));
  }
}
function* onSearchProductsSaga() {
  yield takeEvery("products/onSearchProduct", workSearchProductFetch);
}
function* workAddProductFetch({ payload }) {
  const { title, description, price, category } = payload;
  try {
    const products = yield call(() =>
      fetch(`${address}products/add`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          price,
          category,
        }),
      })
    );
    if (!products.ok) {
      const errorResponse = yield products.json();

      const errorMessage = errorResponse.msg;
      yield put(onAddProductFailure(errorMessage));
      throw new Error(errorMessage);
    }
    const productData = yield products.json();
    toast("Product Added Successfully...!");
    yield put(onAddProductSuccess(productData));
  } catch (error) {
    yield put(onAddProductFailure(error.message));
  }
}
function* onAddProductsSaga() {
  yield takeEvery("products/onAddProduct", workAddProductFetch);
}
export default function* ProductsGetSaga() {
  yield all([
    ProductsSaga(),
    DeleteProductsSaga(),
    UpdateProductsSaga(),
    onSearchProductsSaga(),
    onAddProductsSaga(),
    allProductsSaga(),
    allCategorySaga(),
  ]);
}
