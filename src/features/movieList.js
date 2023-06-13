import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../utils/getData";
// intialState
const initialState = {
  MovieList: [],
};
// reducer
export const movieListSlice = createSlice({
  name: "movieList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getData.pending);
    builder.addCase(getData.fulfilled, (state, { payload }) => {
      state.MovieList = payload;
    });
    builder.addCase(getData.rejected);
  },
});

export default movieListSlice.reducer;
