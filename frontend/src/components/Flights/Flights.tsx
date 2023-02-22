import React, { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { FlightsContext } from "../../context/ContextProvider";
import { FlightInterface } from "../../types/types";
import { Flight } from "../Flight/Flight";
import { SearchBar } from "../SearchBar/SearchBar";
import { StyledUl, ViewContainer } from "./styles";

const Flights = () => {
  const appContext: {
    sortedData?: FlightInterface[];
    sortSelect?: string;
    setSortedData?: Dispatch<SetStateAction<FlightInterface[]>>;
  } = useContext(FlightsContext);

  const { sortedData, sortSelect, setSortedData } = appContext;

  useEffect(() => {
    setSortedData([...sortedData]);
    console.log(sortSelect);
  }, []);

  return (
    <ViewContainer>
      <SearchBar />
      <StyledUl>
        {sortedData
          ? sortedData?.map((flight: FlightInterface) => (
              <li key={flight.uuid}>
                <Flight uuid={flight.uuid} airlineCode={flight.airlineCode} price={flight.price} bounds={flight.bounds} />
              </li>
            ))
          : null}
      </StyledUl>
    </ViewContainer>
  );
};

export default Flights;
