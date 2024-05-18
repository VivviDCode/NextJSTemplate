import { all } from "redux-saga/effects";
import loginGetSaga from "./loginSaga";
import ProductsGetSaga from "./ProductSaga";

function* rootSaga() {
  yield all([
    loginGetSaga(),
    ProductsGetSaga()
  ]);
}

export default rootSaga;
