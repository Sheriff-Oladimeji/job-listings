import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./features/filter";
export default configureStore({
  reducer: {
    filter: filterReducer,
  },
});
