import React, { useContext } from "react";
import { FlightsContext } from "../../context/ContextProvider";
import { FlightInterface } from "../../types";
import { Flight } from "../Flight/Flight";
import { SearchBar } from "../SearchBar/SearchBar";
import { FlightsContainer } from "./styles";

const Flights = () => {
  const appContext: {
    sortedData?: FlightInterface[];
    data?: FlightInterface[];
  } = useContext(FlightsContext);
  const { sortedData, data } = appContext;
  console.log(data);

  return (
    <FlightsContainer>
      <SearchBar />
      {!sortedData
        ? null
        : sortedData?.map((flight: any) => (
            <Flight uuid={flight.uuid} airlineCode={flight.airlineCode} price={flight.price} bounds={flight.bounds} key={flight.uuid} />
          ))}
    </FlightsContainer>
  );
};

export default Flights;
