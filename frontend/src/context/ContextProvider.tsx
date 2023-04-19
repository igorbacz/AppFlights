import React, { createContext, useCallback, useEffect, useReducer } from "react";
import { API_URL } from "../constant/apiUrl";
import { Paths } from "../routes/routesMap";
import { FlightActions, FlightState } from "./types";
import flightReducer from "./FlightReducer";

const initialState: FlightState = {
  flights: null,
};
export const FlightsContext = createContext<{ state: FlightState; dispatch: React.Dispatch<FlightActions> }>({
  state: initialState,
  dispatch: () => null,
});
type Props = {
  children: React.ReactNode;
};
export const FlightProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(flightReducer, initialState);

  const getFlights = useCallback(async (): Promise<void> => {
    try {
      const response = await fetch(`${API_URL}${Paths.Flights}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_FLIGHTS", payload: data });
        dispatch({ type: "SORT_BY_PRICE" });
      }
    } catch (error) {
      alert("Could not fetch flights data");
    }
  }, [dispatch]);

  useEffect(() => {
    getFlights();
  }, []);

  return <FlightsContext.Provider value={{ state, dispatch }}>{children}</FlightsContext.Provider>;
};
