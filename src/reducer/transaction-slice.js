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
    console.log(transactions);
    return transactions;
  }
);

export const createTransactions = createAsyncThunk(
  "transactions/create",
  async (trx) => {
    const transactions = await TransactionsAPI.createTransactions(trx);
    return transactions;
  }
);

export const updateTransactions = createAsyncThunk(
  "transactions/update",
  async (trx) => {
    const transactions = await TransactionsAPI.updateTransactions(trx);
    return transactions;
  }
);

export const deleteTransactions = createAsyncThunk(
  "transactions/delete",
  async (trx) => {
    const transactions = await TransactionsAPI.deleteTransactions(trx);
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
        state.transactions = action.payload;
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
