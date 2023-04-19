import { FlightTypes } from "../types/types";
import { FlightActions, FlightState } from "./types";

const flightReducer = (state: FlightState, action: FlightActions): FlightState => {
  switch (action.type) {
    case "SORT_BY_DATE":
      const flightsSortedByDate: FlightTypes[] = state?.flights.sort((a: FlightTypes, b: FlightTypes) => {
        const x: number = new Date(b.bounds[0]?.departure.dateTime).valueOf();
        const y: number = new Date(a.bounds[0]?.departure.dateTime).valueOf();
        return y - x;
      });
      return { ...state, flights: flightsSortedByDate };

    case "SORT_BY_PRICE":
      const flightsSortedByPrice: FlightTypes[] = state?.flights.sort((a: FlightTypes, b: FlightTypes) => {
        const x = a.price.amount;
        const y = b.price.amount;
        return x - y;
      });
      return { ...state, flights: flightsSortedByPrice };
    case "SET_FLIGHTS":
      return { ...state, flights: action.payload };
    default:
      return state;
  }
};

export default flightReducer;
