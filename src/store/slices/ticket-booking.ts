import { BookingData } from "@/types/booking-progress-reducer";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: BookingData = {
  departureDate: "",
  email: "",
  passengerName: "",
  seatNumber: null,
  busId: "",
};

const slice = createSlice({
  name: "BookingProgress",
  initialState,
  reducers: {
    setPassengerName: (state, action) => {
      state.passengerName = action.payload;
    },
    setPassengerEmail: (state, action) => {
      state.email = action.payload;
    },
    setDepartureDate: (state, action) => {
      state.departureDate = action.payload;
    },
    setSeatNumber: (state, action: PayloadAction<number>) => {
      state.seatNumber = action.payload;
    },
    setBusId: (state, action: PayloadAction<string>) => {
      state.busId = action.payload;
    },
  },
});

export const {
  setDepartureDate,
  setPassengerEmail,
  setPassengerName,
  setSeatNumber,
  setBusId,
} = slice.actions;
export const selectBookingProgress = (store: any) =>
  store.BusBookingProgress as BookingData;
export default slice.reducer;
