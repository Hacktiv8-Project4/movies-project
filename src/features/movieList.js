import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ID_URL = "";

const initialState = {
  MovieList: [],
};

export const fetchIdNews = createAsyncThunk("fetchMovieList", async () => {
  const response = await axios.get(L);
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
