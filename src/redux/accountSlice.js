import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAccountAsync = createAsyncThunk(
  "account/getAccountAsync",
  async () => {
    const response = await fetch("http://52.151.17.51:8000/api/account");
    if (response.ok) {
      const responseFromServer = await response.json();
      const account = responseFromServer.account;
      return { account };
    } else {
      console.log("[FAILED] getAccountAsync: ", response.status);
    }
  }
);
const accountSlice = createSlice({
  name: "account",
  initialState: [{ a: 1 }],
  reducers: {
    sortAccountByPrice: (state, action) => {
      console.log("price sort", action.payload);
    },
    sortAccountByDate: (state, action) => {
      console.log("date sort", action.payload);
      // return state.push(action.payload);
    },
  },
  extraReducers: {
    [getAccountAsync.pending]: (state, actions) => {
      console.log("[PENDING] getAccountAsync", state);
    },
    [getAccountAsync.fulfilled]: (state, actions) => {
      // console.log("[FULFILLED] getAccountAsync", actions.payload.account);
      return actions.payload.account;
    },
    [getAccountAsync.rejected]: (state, actions) => {
      console.log("[REJECTED] getAccountAsync", actions);
    },
  },
});

export const { sortAccountByPrice, sortAccountByDate } = accountSlice.actions;
export default accountSlice.reducer;
