
export interface FlightTypes {
  uuid: string;
  airlineCode: string;
  price: Price;
  bounds: Bound[];
}

export interface Price {
  amount: number;
  currency: string;
}
export interface Bound {
  departure: {
    code: string;
    name: string;
    dateTime: Date;
  };
  destination: {
    code: string;
    name: string;
    dateTime: string;
  };
  duration: string;
}

export interface Details {
  remainingNumberOfSeats: number;
  seatPitch: number;
  freeBaggageAllowed: boolean;
  cabinClass: string;
}

