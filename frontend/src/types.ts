
export interface Flight {
  uuid: string;
  airlineCode:string;
  price:Price;
  bounds:Bound[];
  details:Details;
}

interface Price {
  amount: number;
  currency:string;
}
interface Bound {
  departure: {
    code: string;
    name: string;
    dateTime: Date;
  };
  destination: {
    code: string;
    name:string;
    dateTime: string;
  };
  duration: string;
}

interface Details {
  remainingNumberOfSeats: number
  seatPitch: number
  freeBaggageAllowed: boolean
  cabinClass: string
}

export const flight = {
  uuid: "04e8e5aa-27e6-40a9-bd80-d6ea88f8e6ea",
  airlineCode: "LH",
  price: {
    amount: 254.52,
    currency: "EUR",
  },
  bounds: [
    {
      departure: {
        code: "AMS",
        name: "Amsterdam Schiphol",
        dateTime: "2023-05-09T22:00:00.000Z",
      },
      destination: {
        code: "BCN",
        name: "Barcelona",
        dateTime: "2023-05-09T22:00:00.000Z",
      },
      duration: "PT26100S",
    },
    {
      departure: {
        code: "BCN",
        name: "Barcelona",
        dateTime: "2023-05-14T22:00:00.000Z",
      },
      destination: {
        code: "AMS",
        name: "Amsterdam Schiphol",
        dateTime: "2023-05-14T22:00:00.000Z",
      },
      duration: "PT26100S",
    },
  ],
  details: {
    remainingNumberOfSeats: 2,
    seatPitch: 81,
    freeBaggageAllowed: false,
    cabinClass: "BUSINESS",
  },
}