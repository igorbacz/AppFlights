import React, { createContext, useEffect } from "react";
import { FlightInterface } from "../types";

const FlightsContext = createContext({});

const FlightsProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = React.useState<FlightInterface[]>([]);
  const [sortedData, setSortedData] = React.useState<FlightInterface[]>([]);
  const [sorting, setSorting] = React.useState("price");

  const getFlights = async () => {
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
    console.log(sorting);
  }, [sorting, data]);

  const sortedHandler = () => {
    if (sorting === "price") {
      let sortedFlights = data.sort((a, b) => {
        const x = a.price.amount;
        const y = b.price.amount;
        return x - y;
      });
      setSortedData(sortedFlights);
      // Object.assign(sortedData, sortedFlights);
    } else if (sorting === "time") {
      let sortedFlights = data.sort((a, b) => {
        const x: number = new Date(b.bounds[0]?.departure.dateTime).valueOf();
        const y: number = new Date(a.bounds[0]?.departure.dateTime).valueOf();
        return y - x;
      });
      // console.log(sortedData);
      setSortedData(sortedFlights);
      Object.assign(sortedData, sortedFlights);
    }
  };
  return (
    <FlightsContext.Provider
      value={{
        sorting,
        setSorting,
        sortedData,
        sortedHandler,
      }}
    >
      {children}
    </FlightsContext.Provider>
  );
};

export { FlightsContext, FlightsProvider };
