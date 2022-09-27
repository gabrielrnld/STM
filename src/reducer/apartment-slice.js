import { createAsyncThunk } from "@reduxjs/toolkit";
import * as ApartmentAPI from "../API/ApartmentAPI";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  units: [],
  isLoading: true,
  actions: new Date().getTime(),
};

export const fetchApartments = createAsyncThunk(
  "apartment/getAll",
  async () => {
    const apartments = await ApartmentAPI.getAllApartments();
    return apartments;
  }
);

export const createApartments = createAsyncThunk(
  "apartment/create",
  async () => {
    const apartments = await ApartmentAPI.createApartments();
    return apartments;
  }
);

export const updateApartments = createAsyncThunk(
  "apartment/update",
  async () => {
    const apartments = await ApartmentAPI.updateApartments();
    return apartments;
  }
);

export const deleteApartments = createAsyncThunk(
  "apartment/delete",
  async () => {
    const apartments = await ApartmentAPI.deleteApartments();
    return apartments;
  }
);
export const ApartmentSlice = createSlice({
  name: "apartments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApartments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApartments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.units = action.payload;
      })
      .addCase(createApartments.fulfilled, (state) => {
        state.isLoading = false;
        state.actions = new Date().getTime();
      })
      .addCase(updateApartments.fulfilled, (state) => {
        state.isLoading = false;
        state.actions = new Date().getTime();
      })
      .addCase(deleteApartments.fulfilled, (state) => {
        state.isLoading = false;
        state.actions = new Date().getTime();
      });
  },
});
