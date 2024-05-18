import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import loginreducer from "../redux/loginSlice";
import productsSlice from "../redux/ProductsSlice";

import Saga from "../saga";


const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    login: loginreducer,
    Products:productsSlice
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      sagaMiddleware
    );
  },
});

sagaMiddleware.run(Saga);

export default store;
