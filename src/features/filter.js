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
    clearFilter: (state) => {
      state.myArray = initialState.myArray;
    },
    removeFilter: (state, action) => {
      const itemIndex = state.myArray.indexOf(action.payload);
      if (itemIndex !== -1) {
        state.myArray.splice(itemIndex, 1);
      }
    },
  },
});
export const { filterClick, clearFilter, removeFilter} = filterSlice.actions;
export default filterSlice.reducer;
