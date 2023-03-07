import { Redirect, Route, Switch } from "react-router-dom";
import { Paths } from "../types/types";
import { Confirmation } from "./Confirmation/Confirmation";
import Flights from "./Flights";

const Routes = () => {
  return (
    <Switch>
      <Route path={Paths.Flights}>
        <Flights />
      </Route>
      <Route path={Paths.Confirmation}>
        <Confirmation />
      </Route>
      <Route path="*">
        <Redirect to={Paths.Flights} />
      </Route>
    </Switch>
  );
};

export default Routes;
