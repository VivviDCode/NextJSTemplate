"use client";
import { ToastContainer } from "react-toastify";
import { store } from "./store";
const { Provider } = require("react-redux");

export function Providers({ children }) {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>{children}</Provider>
    </>
  );
}
