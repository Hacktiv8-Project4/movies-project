import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CONFIG from "../../config/config";

const initialState = {
  isLoading: false,
  errorMessage: "",
  movies: [],
  series: [],
};

// movie
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = await axios.get(
      `${CONFIG.baseURL}?s=man&apikey=${CONFIG.apiKey}`
    );

    return response.data.Search;
  } catch (error) {
    throw error;
  }
});

// series
export const fetchSeries = createAsyncThunk("series/fetchSeries", async () => {
  try {
    const response = await axios.get(
      `${CONFIG.baseURL}?s=man&type=series&apikey=${CONFIG.apiKey}`
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
        `${CONFIG.baseURL}?s=${searchTerm}&apikey=${CONFIG.apiKey}`
      );
      return response.data.Search;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchSearchSeries = createAsyncThunk(
  "searchSeries/fetchSearchSeries",
  async (searchTerm, thunkAPI) => {
    try {
      const response = await axios.get(
        `${CONFIG.baseURL}?s=${searchTerm}&type=series&apikey=${CONFIG.apiKey}`
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
      .addCase(fetchSeries.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(fetchSeries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.series = action.payload;
      })
      .addCase(fetchSeries.rejected, (state, action) => {
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
    builder
      .addCase(fetchSearchSeries.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(fetchSearchSeries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.series = action.payload;
      })
      .addCase(fetchSearchSeries.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
