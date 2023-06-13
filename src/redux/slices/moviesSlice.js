import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import CONFIG from "../config/config";

const initialState = {
  isLoading: false,
  errorMessage: "",
  movies: [],
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = await axios.get(
      "https://www.omdbapi.com/?s=man&apikey=f073b72d"
    );

    return response.data.Search;
  } catch (error) {
    throw error;
  }
});

// search
export const fetchSearchMovies = createAsyncThunk(
  "search/fetchSearchMovies",
  async (searchTerm, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=f073b72d`
      );
      return response.data.Search;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
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
        // if (!state.movies.length) {
        state.movies = action.payload;
        // }
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message;
      });
    builder
      .addCase(fetchSearchMovies.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(fetchSearchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.movies = action.payload;
      })
      .addCase(fetchSearchMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
