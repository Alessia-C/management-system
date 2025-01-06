import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialValues: {},
  formData: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    setInitialValues: (state, action) => {
      state.initialValues = action.payload;
    },
  },
});

export const { updateForm, setInitialValues } = formSlice.actions;
export default formSlice.reducer;
