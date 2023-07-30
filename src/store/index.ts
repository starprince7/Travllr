import { configureStore } from "@reduxjs/toolkit";
import bookingProgressReducer from "./slices/ticket-booking";
import busSeats from "./slices/bus-seats";
import ticket from "./slices/ticket-info";

export const store = configureStore({
  reducer: {
    BusBookingProgress: bookingProgressReducer,
    BusSeats: busSeats,
    Ticket: ticket,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
