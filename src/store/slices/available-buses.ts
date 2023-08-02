import { AvailableBusStore } from "@/types/bus";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type FetchAvailableBusArgs = {
  origin: string;
  destination: string;
  departureDate: string;
};

const initialState: AvailableBusStore = {
  errorMessage: "",
  availableBuses: [],
  networkRequestStatus: "idle",
  apiError: {
    message: "",
    statusCode: 0,
    error: false,
  },
};

export const fetchAvailableBuses = createAsyncThunk<any, FetchAvailableBusArgs>(
  "AvailableBuses/fetchAvailableBuses",
  async ({ departureDate, destination, origin }) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/buses/search?origin=${origin}&destination=${destination}&departureDate=${departureDate}`
    );
    const data = await response.json();
    return data;
  }
);

const slice = createSlice({
  name: "AvailableBuses",
  initialState,
  reducers: {
    clearError: (state) => {
      state.errorMessage = "";
      state.apiError = {
        message: "",
        statusCode: 0,
        error: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAvailableBuses.pending, (state) => {
      state.networkRequestStatus = "loading";
    });
    builder.addCase(fetchAvailableBuses.rejected, (state, action) => {
      (state.networkRequestStatus = "failed"),
        (state.errorMessage = action.error.message!);
    });
    builder.addCase(fetchAvailableBuses.fulfilled, (state, action) => {
      state.networkRequestStatus = "succeeded";
      if (action.payload.error) {
        state.apiError = action.payload as any;
      } else {
        state.availableBuses = action.payload.availableBuses;
      }
      location.assign(`/search-results`);
    });
  },
});

export const selectAvailableBuses = (store: any) =>
  store.AvailableBuses as AvailableBusStore;
export const { clearError } = slice.actions;
export default slice.reducer;
