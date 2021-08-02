import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAccountAsync = createAsyncThunk(
  "account/getAccountAsync",
  async () => {
    const response = await fetch("http://localhost:8000/api/account");
    if (response.ok) {
      const responseFromServer = await response.json();
      const account = responseFromServer.account;

      return {account};
    } else {
      console.log("Response: ", response.status);
    }
  }
);
const accountSlice = createSlice({
  name: "account",
  initialState: [{ a: 1 }],
  reducers: {
    getAllAccount: (state, action) => {
      console.log("[RESPONSE]");
    },
  },
  extraReducers: {
    [getAccountAsync.pending]: (state, actions) => {
      console.log("[PENDING] getAccountAsync", state);
    },
    [getAccountAsync.fulfilled]: (state, actions) => {
      console.log("[FULFILLED] getAccountAsync", actions.payload.account);
      return actions.payload.account.account;
    },
    [getAccountAsync.rejected]: (state, actions) => {
      console.log("[REJECTED] getAccountAsync", actions);
    },
  },
});

export const { getAllAccount } = accountSlice.actions;
export default accountSlice.reducer;
