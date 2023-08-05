import { BusSeat } from "@/types/seat";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: SeatTicket = {
  seat: {
    __v: 0,
    _id: "",
    bookingDate: "",
    isBooked: false,
    bus: "",
    passengerName: "",
    price: 0,
    seatNumber: 0,
  },
  error: null,
};

const slice = createSlice({
  name: "Ticket",
  initialState,
  reducers: {
    setBusTicket: (state, action: PayloadAction<BusSeat>) => {
      state.seat = action.payload;
    },
    setBookingError: (state, action: PayloadAction<ErrorInfo>) => {
      state.error = action.payload;
    },
  },
});

export const { setBusTicket, setBookingError } = slice.actions;
export const selectBusTicket = (store: any) => store.Ticket as SeatTicket; // Selector
export default slice.reducer;

type ErrorInfo = {
  error: boolean;
  message: string;
  statusCode: number;
};

type SeatTicket = {
  seat: BusSeat;
  error: ErrorInfo | null;
};
