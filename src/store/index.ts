import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

import bookingProgressReducer from "./slices/ticket-booking";
import busSeats from "./slices/bus-seats";
import ticket from "./slices/ticket-info";
import availableBuses from "./slices/available-buses";

const availableBusesPersistConfig = {
  key: "availableBuses",
  storage,
  blacklist: ["networkRequestStatus"],
};

const rootReducer = combineReducers({
  BusBookingProgress: bookingProgressReducer,
  BusSeats: busSeats,
  Ticket: ticket,
  AvailableBuses: persistReducer(availableBusesPersistConfig, availableBuses),
});

const rootPersistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type StoreState = ReturnType<typeof store.getState>;
