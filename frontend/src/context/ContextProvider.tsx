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
        return a.price.amount - b.price.amount;
      });
      setSortedData(sortedData);
      setData(sortedData);
      console.log(sortedData);
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
