export interface Bus {
  _id: string;
  seatPrice: number;
  registrationNumber: string;
  model: string;
  capacity: number;
  available: boolean;
  busType: string;
  amenities: ("Wi-Fi" | "TV" | "Power Outlets" | "Air Conditioner")[];
  origin: string;
  destination: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  departureDate: string;
}

export interface AvailableBus {
  bus: Bus;
  availableSeats: number;
  departureTime: string;
}

export interface ApiResponse {
  error: boolean;
  availableBuses: AvailableBus[];
}

export interface ApiErrorResponse {
  message: string;
  statusCode: number;
  error: boolean;
}
