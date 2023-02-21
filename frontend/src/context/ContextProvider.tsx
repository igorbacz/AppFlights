import { createContext, useEffect, useState } from "react";
import React from "react";
import { FlightInterface } from "../types";

const FlightsContext = createContext({});

const FlightsProvider = ({ children }: any) => {
  const [data, setData] = useState<FlightInterface[]>([]);
  const [sortedData, setSortedData] = useState<FlightInterface[]>([]);
  const [sorting, setSorting] = useState("price");

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
    console.log(data);
    setData(data);
    return data;
  };

  useEffect(() => {
    getFlights();
  }, []);

  useEffect(() => {
    sortedHandler();
  }, [sorting, data]);

  const sortedHandler = () => {
    if (sorting === "price") {
      let sortedData = data.sort((a, b) => {
        const x = a.price.amount;
        const y = b.price.amount;
        return x - y;
      });
      setSortedData(sortedData);
      setData(sortedData);
    } else if (sorting === "time") {
      let sortedData = data.sort((a, b) => {
        const x = new Date(b.bounds[1]?.departure.dateTime).valueOf();
        const y = new Date(a.bounds[1]?.departure.dateTime).valueOf();
        return x - y;
      });
      setSortedData(sortedData);
      setData(sortedData);
    }
  };
  return (
    <FlightsContext.Provider
      value={{
        data,
        setData,
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
