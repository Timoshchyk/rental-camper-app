import { configureStore } from "@reduxjs/toolkit";
import { campsReducer } from "./api/slice";

const store = configureStore({
  reducer: {
    camps: campsReducer,
  },
});

export default store;