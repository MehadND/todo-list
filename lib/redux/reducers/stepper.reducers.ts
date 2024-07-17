import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  steps: 0,
  checkboxState: false,
};

const stepperSlice = createSlice({
  name: 'stepper',
  initialState,
  reducers: {
    changeStep: (state, { payload }) => {
      state.steps = payload;
    },
    changeCheckbox: (state, { payload }) => {
      state.checkboxState = payload;
    },
  },
});

export const { changeStep, changeCheckbox } = stepperSlice.actions;

export const stepperReducer = stepperSlice.reducer;
