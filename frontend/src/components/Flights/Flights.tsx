import { useContext } from "react";
import { FlightsContext } from "../../context/ContextProvider";
import { FlightInterface } from "../../types/types";
import { Flight } from "../Flight/Flight";
import { SearchBar } from "../SearchBar/SearchBar";
import { StyledUl, ViewContainer } from "./styles";

const Flights = (): JSX.Element => {
  const appContext: {
    sortedData?: FlightInterface[];
  } = useContext(FlightsContext);
  const { sortedData } = appContext;
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
