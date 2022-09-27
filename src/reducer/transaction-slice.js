import { createAsyncThunk } from "@reduxjs/toolkit";
import * as TransactionsAPI from "../API/TransactionAPI";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
  isLoading: true,
  actions: new Date().getTime(),
};

export const fetchTransactions = createAsyncThunk(
  "transactions/getAll",
  async () => {
    const transactions = await TransactionsAPI.getAllTransactions();
    return transactions;
  }
);

export const createTransactions = createAsyncThunk(
  "transactions/create",
  async () => {
    const transactions = await TransactionsAPI.createTransactions;
    return transactions;
  }
);

export const updateTransactions = createAsyncThunk(
  "transactions/update",
  async () => {
    const transactions = await TransactionsAPI.updateTransactions();
    return transactions;
  }
);

export const deleteTransactions = createAsyncThunk(
  "transactions/delete",
  async () => {
    const transactions = await TransactionsAPI.deleteTransactions();
    return transactions;
  }
);
export const TransactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.units = action.payload;
      })
      .addCase(createTransactions.fulfilled, (state) => {
        state.isLoading = false;
        state.actions = new Date().getTime();
      })
      .addCase(updateTransactions.fulfilled, (state) => {
        state.isLoading = false;
        state.actions = new Date().getTime();
      })
      .addCase(deleteTransactions.fulfilled, (state) => {
        state.isLoading = false;
        state.actions = new Date().getTime();
      });
  },
});
