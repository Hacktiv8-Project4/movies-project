import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saved: [],
};

export const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    add: (state, action) => {
      const existsItem = state.saved?.find(
        (item) => item.Title === action.payload?.Title
      );
      if (!existsItem) {
        state.saved?.push(action.payload);
      } else {
      }
    },
    remove: (state, action) => {
      const removeItem = state.saved?.filter(
        (item) => item.Title !== action.payload
      );
      state.saved = removeItem;
    },
  },
  extraReducers: {},
});

export const { add, remove } = savedSlice.actions;
export default savedSlice.reducer;
