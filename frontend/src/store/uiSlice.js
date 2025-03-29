import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { notification: null, loading: false, viewContent: localStorage.getItem("switchViewStracture") || "card" },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    startLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
    changeView(state, action) {
      state.viewContent = action.payload;
      localStorage.setItem("switchViewStracture", JSON.stringify(action.payload))
    },
  },
});

export const { showNotification, startLoading, clearLoading, changeView } =
  uiSlice.actions;

export default uiSlice.reducer;
