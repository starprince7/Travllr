export interface BusSeat {
  _id: string;
  bus: string;
  seatNumber: number;
  passengerName: string | null;
  bookingDate: string | null;
  price: number;
  isBooked: boolean;
  __v: number;
}
