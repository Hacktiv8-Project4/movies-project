import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  MovieList: [],
};

export const fetchIdNews = createAsyncThunk("fetchMovieList", async () => {
  const response = await axios.get("");
  return response.data;
});

export const movieList = createSlice({
  name: "movieList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchIdNews.pending);
    builder.addCase(fetchIdNews.fulfilled, (state, { payload }) => {
      state.MovieList = payload;
    });
    builder.addCase(fetchIdNews.rejected);
  },
});

export default movieList.reducer;
