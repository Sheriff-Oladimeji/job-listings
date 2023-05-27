import { createSlice } from "@reduxjs/toolkit";
const initialState = { myArray: [] };
export const filterSlice = createSlice({
  name: "filter",
initialState,
  reducers: {
    filterClick: (state, action) => {
          if (!state.myArray.includes(action.payload)) {
        state.myArray.push(action.payload);
   }
    },
  },
});
export const { filterClick } = filterSlice.actions;
export default filterSlice.reducer;
