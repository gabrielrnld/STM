import { configureStore } from "@reduxjs/toolkit";
import { ApartmentSlice } from "./apartment-slice";
import { LoginSlice } from "./login-slice";
import { ResidentsSlice } from "./resident-slice";
import { TransactionsSlice } from "./transaction-slice";

export const appStore = configureStore({
  reducer: {
    units: ApartmentSlice.reducer,
    residents: ResidentsSlice.reducer,
    transactions: TransactionsSlice.reducer,
    users: LoginSlice.reducer,
  },
});
