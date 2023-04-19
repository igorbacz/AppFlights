import { Pagination } from "@mui/material";
import { ChangeEvent, FC, useEffect, useMemo, useState } from "react";
import usePagination from "../../hooks/usePagination";
import { FlightTypes } from "../../types/types";
import { PaginationContainer, StyledUl, ViewContainer } from "./styles";
import CircularProgress from "@mui/material/CircularProgress";
import { Flight } from "../Flight";
import { SearchBar } from "../SearchBar";

import { useFlightContext } from "../../context/hook";

const Flights: FC = () => {
  const [loading, setLoading] = useState(false);
  const { flights } = useFlightContext();

  useEffect(() => {
    flights == null ? setLoading(true) : setLoading(false);
  }, [flights]);

  const [page, setPage] = useState(1);
  const PER_PAGE = 5;

  const count: number = useMemo(() => {
    return flights == null ? 0 : Math.ceil(flights?.length / PER_PAGE);
  }, [flights?.length]);

  const flightsWithPagination = usePagination(flights, PER_PAGE);
  const handleChangePagination = (e: ChangeEvent<unknown>, p: number) => {
    setPage(p);
    flightsWithPagination.jump(p);
  };

  return (
    <ViewContainer>
      <SearchBar />
      {loading ? (
        <CircularProgress />
      ) : (
        <StyledUl>
          {flights &&
            flightsWithPagination.currentData().map((flight: FlightTypes) => (
              <li key={flight.uuid}>
                <Flight uuid={flight.uuid} airlineCode={flight.airlineCode} price={flight.price} bounds={flight.bounds} />
              </li>
            ))}
        </StyledUl>
      )}

      <PaginationContainer>
        <Pagination count={count} page={page} color="secondary" variant="outlined" shape="rounded" onChange={handleChangePagination} />
      </PaginationContainer>
    </ViewContainer>
  );
};

export default Flights;
