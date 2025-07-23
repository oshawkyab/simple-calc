import { configureStore } from "@reduxjs/toolkit";
import  calcSlice  from "../features/calculation/calcSlice";
export default configureStore({
  reducer: {
    calculation: calcSlice,
  },
});
