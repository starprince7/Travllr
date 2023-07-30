import { SeatsStore } from "@/types/booking-progress-reducer";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: SeatsStore = {
  errorMessage: "",
  seats: [],
  networkRequestStatus: "idle",
};

export const fetchSeats = createAsyncThunk<any, string>(
  "BusSeats/fetchSeats",
  async (busId) => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/buses/${busId}/seats`
    ).then((result) => result.json());
    return data.seats;
  }
);

const slice = createSlice({
  name: "BusSeats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSeats.pending, (state) => {
      state.networkRequestStatus = "loading";
    });
    builder.addCase(fetchSeats.rejected, (state, action) => {
      (state.networkRequestStatus = "failed"),
        (state.errorMessage = action.error.message!);
    });
    builder.addCase(fetchSeats.fulfilled, (state, action) => {
      state.networkRequestStatus = "succeeded";
      state.seats = action.payload;
    });
  },
});

export const selectSeats = (store: any) => store.BusSeats as SeatsStore;
export default slice.reducer;
