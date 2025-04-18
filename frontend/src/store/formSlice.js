import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialValues: {},
  formData: {},
  configStructureForm: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action) => {
      state.formData[action.payload.name] = action.payload.value;
    },
    setInitialValues: (state, action) => {
      state.initialValues = action.payload;
      state.formData = action.payload;
    },
    setStructureForm: (state, action) => {
      state.configStructureForm = action.payload;
    }
  },
});

export const { updateForm, setInitialValues, setStructureForm } = formSlice.actions;
export default formSlice.reducer;
