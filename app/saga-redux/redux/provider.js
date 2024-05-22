// app/saga-redux/redux/provider.js
"use client";
import { ToastContainer } from "react-toastify";
import { store } from "./store";
import { Provider } from "react-redux";

export function Providers({ children }) {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>{children}</Provider>
    </>
  );
}
