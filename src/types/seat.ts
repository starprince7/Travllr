import { Bus } from "./bus";

export interface BusSeat {
  _id: string;
  bus: Bus;
  seatNumber: number;
  passengerName: string | null;
  bookingDate: string | null;
  price: number;
  isBooked: boolean;
  __v: number;
}
