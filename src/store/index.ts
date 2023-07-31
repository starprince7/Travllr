import { configureStore } from "@reduxjs/toolkit";
import bookingProgressReducer from "./slices/ticket-booking";
import busSeats from "./slices/bus-seats";
import ticket from "./slices/ticket-info";
import availableBuses from "./slices/available-buses";

export const store = configureStore({
  reducer: {
    BusBookingProgress: bookingProgressReducer,
    BusSeats: busSeats,
    Ticket: ticket,
    AvailableBuses: availableBuses,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
