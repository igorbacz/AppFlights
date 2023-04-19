import { useContext } from "react";
import { FlightsContext } from "./ContextProvider";
import { FlightTypes } from "../types/types";

export const useFlightContext = () => {
  const { state, dispatch } = useContext(FlightsContext);

  const sortByDate = (flights: FlightTypes[]) => {
    dispatch({
      type: "SORT_BY_DATE",
      payload: flights,
    });
  };

  const sortByPrice = (flights: FlightTypes[]) => {
    dispatch({
      type: "SORT_BY_PRICE",
      payload: flights,
    });
  };

  return {
    flights: state.flights,
    sortByDate,
    sortByPrice,
  };
};
