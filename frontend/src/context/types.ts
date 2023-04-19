import { FlightTypes } from "../types/types";

export type FlightState = {
  flights: FlightTypes[] | null;
};

export type FlightActions =
  | { type: "SORT_BY_DATE"; payload: FlightTypes[] }
  | { type: "SORT_BY_PRICE"; payload?: FlightTypes[] }
  | { type: "SET_FLIGHTS"; payload: FlightTypes[] };
