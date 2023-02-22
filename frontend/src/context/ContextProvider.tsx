import React, { createContext, useEffect, useState } from "react";
import { FlightInterface } from "../types/types";

const FlightsContext = createContext({});

const FlightsProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<FlightInterface[]>([]);
  const [sortedData, setSortedData] = useState<FlightInterface[]>([]);
  const [sortSelect, setSortSelect] = useState("price");

  const getFlights = async (): Promise<FlightInterface> => {
    const response = await fetch("http://localhost:3001/flights", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Could not fetch flights data");
    }
    const data = await response.json();
    setData(data);
    return data;
  };

  useEffect(() => {
    getFlights();
  }, []);

  useEffect(() => {
    sortedHandler();
  }, [sortSelect, data]);

  const sortedHandler = (): void => {
    if (sortSelect === "price") {
      let sortedFlights = data.sort((a, b) => {
        const x = a.price.amount;
        const y = b.price.amount;
        return x - y;
      });
      setSortedData(sortedFlights);
      // Object.assign(sortedData, sortedFlights);
    } else if (sortSelect === "time") {
      let sortedFlights = data.sort((a, b) => {
        const x: number = new Date(b.bounds[0]?.departure.dateTime).valueOf();
        const y: number = new Date(a.bounds[0]?.departure.dateTime).valueOf();
        return y - x;
      });
      setSortedData(sortedFlights);
      // Object.assign(sortedData, sortedFlights);
    }
  };
  return (
    <FlightsContext.Provider
      value={{
        sortSelect,
        setSortSelect,
        sortedData,
        setSortedData,
        sortedHandler,
      }}
    >
      {children}
    </FlightsContext.Provider>
  );
};

export { FlightsContext, FlightsProvider };
