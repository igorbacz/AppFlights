import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Main } from "../views/Main/Main";
import { FlightDesktopTemplate } from "./Flight/FlightDesktopTemplate/FlightDesktopTemplate";
import Flights from "./Flights";

const Routes = () => {
  // const getFlights = async () => {
  //   const response = await fetch("http://localhost:3001/flights");
  //   if (!response.ok) {
  //     throw new Error("Could not fetch flights data");
  //   }
  //   const data = await response.json();
  //   console.log(data)
  //   return data;
  // };

  // useEffect(()=>{getFlights()}, [])
  
  return (
    <Switch>
      <Route path="/flights">
        <Flights />
      </Route>
      <Route path="*">
        <Redirect to="flights" />
      </Route>
    </Switch>
  );
};

export default Routes;
