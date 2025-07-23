import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  result: null,
};
export const calcSlice = createSlice({
  name: "calculation",
  initialState,
  reducers: {
    // Sum Reducer
    sum: (currentState, action) => {
      const operation =
        Number(action.payload.firstNumber) +
        Number(action.payload.secondNumber);
      currentState.result = operation;
    },
    sub: (currentState, action) => {
      const operation =
        Number(action.payload.firstNumber) -
        Number(action.payload.secondNumber);
      currentState.result = operation;
    },
    multy: (currentState, action) => {
      const operation =
        Number(action.payload.firstNumber) *
        Number(action.payload.secondNumber);
      currentState.result = operation;
    },
    divid: (currentState, action) => {
      const operation =
        Number(action.payload.firstNumber) /
        Number(action.payload.secondNumber);
      currentState.result = operation;
    },
  },
});
export const { sum, divid, sub, multy } = calcSlice.actions;
export default calcSlice.reducer;
