import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: { form: formReducer, ui: uiSlice },
});

export default store;
