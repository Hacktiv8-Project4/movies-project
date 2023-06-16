import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  errorMessage: "",
  movies: [],
};

export const fetchMovies = createAsyncThunk("fetchMoviesList", async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_API}3/discover/movie?api_key=${process.env.REACT_APP_KEY}`
  );
  return response.data.results;
});

export const searchMovies = createAsyncThunk(
  "fetchSearchMovies",
  async (searchTerm) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_API}3/search/movie?query=${searchTerm}&api_key=${process.env.REACT_APP_KEY}`
    );
    return response.data.results;
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message;
      });
    builder
      .addCase(searchMovies.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.movies = action.payload;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
