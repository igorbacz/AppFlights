import React, { createContext, useEffect, useState } from "react";
import { FlightTypes } from "../types/types";

const FlightsContext = createContext({});

const FlightsProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<FlightTypes[]>([]);
  const [sortedData, setSortedData] = useState<FlightTypes[]>([]);
  const [sortSelect, setSortSelect] = useState<string>("price");

  const getFlights = async (): Promise<FlightTypes> => {
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
      setSortedData([...sortedFlights]);
    } else if (sortSelect === "time") {
      let sortedFlights = data.sort((a, b) => {
        const x: number = new Date(b.bounds[0]?.departure.dateTime).valueOf();
        const y: number = new Date(a.bounds[0]?.departure.dateTime).valueOf();
        return y - x;
      });
      setSortedData([...sortedFlights]);
    }
  };
  return (
    <FlightsContext.Provider
      value={{
        sortSelect,
        setSortSelect,
        sortedData,
      }}
    >
      {children}
    </FlightsContext.Provider>
  );
};

export { FlightsContext, FlightsProvider };
