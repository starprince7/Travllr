export interface Bus {
  bus: {
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
  };
  availableSeats: number;
  departureTime: string;
}
