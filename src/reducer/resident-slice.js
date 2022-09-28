import { createAsyncThunk } from "@reduxjs/toolkit";
import * as ResidentAPI from "../API/ResidentAPI";
import { createSlice } from "@reduxjs/toolkit";
import * as DataAPI from "../API/GetDataByUnitAPI";
import { getResidentByUnitIdApi } from "../API/getDataApi";

const initialState = {
  residents: [],
  isLoading: true,
  actions: new Date().getTime(),
};

export const fetchResidents = createAsyncThunk("residents/getAll", async () => {
  const residents = await ResidentAPI.getAllResidents();
  return residents;
});

export const fetchResidentByUnitId = createAsyncThunk(
  "residents/unitId",
  async (UnitId) => {
    const residents = await DataAPI.getResidentByUnitId(UnitId);
    return residents;
  }
);

export const createResidents = createAsyncThunk(
  "residents/create",
  async (resident) => {
    const residents = await ResidentAPI.createResidents(resident);
    return residents;
  }
);

export const getResidentByUnitId = createAsyncThunk(
  "resident/id",
  async (getTrx) => {
    const residents = await getResidentByUnitIdApi(getTrx);
    return residents;
  }
);

export const getTrxByUnitId = createAsyncThunk(
  "transactions/unitId",
  async (unitId) => {
    const residents = await getResidentByUnitIdApi(unitId);
    return residents;
  }
);

export const updateResidents = createAsyncThunk(
  "residents/update",
  async (resident) => {
    const residents = await ResidentAPI.updateResidents(resident);
    return residents;
  }
);

export const deleteResidents = createAsyncThunk(
  "residents/delete",
  async (resident) => {
    const residents = await ResidentAPI.deleteResidents(resident);
    return residents;
  }
);
export const ResidentsSlice = createSlice({
  name: "residents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResidents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchResidents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.residents = action.payload;
      })
      .addCase(createResidents.fulfilled, (state) => {
        state.isLoading = false;
        state.actions = new Date().getTime();
      })
      .addCase(updateResidents.fulfilled, (state) => {
        state.isLoading = false;
        state.actions = new Date().getTime();
      })
      .addCase(deleteResidents.fulfilled, (state) => {
        state.isLoading = false;
        state.actions = new Date().getTime();
      })
      .addCase(fetchResidentByUnitId.fulfilled, (state, action) => {
        state.isLoading = false;

      });
  },
});
