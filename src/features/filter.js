import { createSlice } from "@reduxjs/toolkit";
const initialStateValue  = []
export const filterSlice = createSlice({
    name: "filter",
    initialState: { value: initialStateValue },
    reducers: {
        filterClick: (state, action) => {
            state.value = action.payload
        }
    }
})
export const {filterClick} = filterSlice.actions
export default filterSlice.reducer 