import { Redirect, Route, Switch } from "react-router-dom";
import { Confirmation } from "./Confirmation/Confirmation";
import Flights from "./Flights";

const Routes = () => {
  return (
    <Switch>
      <Route path="/flights">
        <Flights />
      </Route>
      <Route path="/confirmation">
        <Confirmation />
      </Route>
      <Route path="*">
        <Redirect to="flights" />
      </Route>
    </Switch>
  );
};

export default Routes;
