import { Pagination } from "@mui/material";
import { ChangeEvent, useContext, useState } from "react";
import { FlightsContext } from "../../context/ContextProvider";
import usePagination from "../../hooks/usePagination";
import { FlightTypes } from "../../types/types";
import { Flight } from "../Flight/Flight";
import { SearchBar } from "../SearchBar/SearchBar";
import { PaginationContainer, StyledUl, ViewContainer } from "./styles";
import CircularProgress from "@mui/material/CircularProgress";

const Flights = (): JSX.Element => {
  const appContext: {
    sortedData?: FlightTypes[];
  } = useContext(FlightsContext);
  const { sortedData } = appContext;
  const [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const count = Math.ceil(sortedData.length / PER_PAGE);
  const _DATA = usePagination(sortedData, PER_PAGE);
  const handleChangePagination = (e: ChangeEvent<unknown>, p: number) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <ViewContainer>
      <SearchBar />
      <StyledUl>
        {sortedData ? (
          _DATA.currentData().map((flight: FlightTypes) => (
            <li key={flight.uuid}>
              <Flight uuid={flight.uuid} airlineCode={flight.airlineCode} price={flight.price} bounds={flight.bounds} />
            </li>
          ))
        ) : (
          //TODO
          <CircularProgress />
        )}
      </StyledUl>
      <PaginationContainer>
        <Pagination count={count} page={page} color="secondary" variant="outlined" shape="rounded" onChange={handleChangePagination} />
      </PaginationContainer>
    </ViewContainer>
  );
};

export default Flights;
