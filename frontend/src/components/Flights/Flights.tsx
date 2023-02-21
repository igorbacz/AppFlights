import React, { Dispatch, SetStateAction, useContext, useEffect } from "react";
import styled from "styled-components";
import { FlightsContext } from "../../context/ContextProvider";
import { FlightInterface } from "../../types";
import { Flight } from "../Flight/Flight";
import { SearchBar } from "../SearchBar/SearchBar";
import { StyledUl, ViewContainer } from "./styles";

const Flights = () => {
  const appContext: {
    sortedData?: FlightInterface[];
    data?: FlightInterface[];
    sorting?: string;
    setSortedData?: Dispatch<SetStateAction<FlightInterface[]>>;
  } = useContext(FlightsContext);

  const { sortedData, data, sorting, setSortedData } = appContext;

  // useEffect(() => {
  //   setSortedData(sortedData);
  // }, []);
  //TODO

  console.log(sorting);

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
