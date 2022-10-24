import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosSearch } from "../../Config/Config.js";


export const qouteGenaratorReducer = createAsyncThunk("data", async () => {
  return axiosSearch.get(`/random`);
});
export  const qoutesGenrator = createSlice({
  name: "data",
  initialState: {
    qouteData: [],
    qouteLoading: false,
  },
  extraReducers: {
    [qouteGenaratorReducer.pending]: (state, action) => {
      state.QouteLoading = true;
    },
    [qouteGenaratorReducer.fulfilled]: (state, action) => {
      state.qouteData = action.payload.data;
      state.qouteLoading = false;
    },
    [qouteGenaratorReducer.rejected]: (state, action) => {
      state.QouteLoading = false;
    },
  },
});

const qouteReducer = qoutesGenrator.reducer;
export default qouteReducer;
