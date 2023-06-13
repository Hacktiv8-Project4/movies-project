import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("getData", async () => {
  const url = process.env.REACT_APP_BASE_API + "";

  const response = await axios.get(url);
  return response.data;
});
