import { BusSeat } from "./seat";

export enum ActionType {
  SET_SEAT_NUMBER = "SET_SEAT_NUMBER",
  SET_PASSENGER_NAME = "SET_PASSENGER_NAME",
  SET_DEPARTURE_DATE = "SET_DEPARTURE_DATE",
  SET_EMAIL = "SET_EMAIL",
}

// Action types
type SetSeatNumberAction = {
  type: ActionType.SET_SEAT_NUMBER;
  payload: number;
};

type SetPassengerNameAction = {
  type: ActionType.SET_PASSENGER_NAME;
  payload: string;
};

type SetDepartureDateAction = {
  type: ActionType.SET_DEPARTURE_DATE;
  payload: string;
};

type SetEmailAction = {
  type: ActionType.SET_EMAIL;
  payload: string;
};

export type BookingAction =
  | SetSeatNumberAction
  | SetPassengerNameAction
  | SetDepartureDateAction
  | SetEmailAction;

// BookingData type
export type BookingData = {
  seatNumber: number | null;
  passengerName: string;
  departureDate: string;
  email: string;
  busId: string;
};

export type SeatsStore = {
  errorMessage: string;
  seats: BusSeat[];
  networkRequestStatus: "idle" | "loading" | "failed" | "succeeded";
};
