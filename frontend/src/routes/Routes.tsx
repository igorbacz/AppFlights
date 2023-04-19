import { Redirect, Route, Switch } from "react-router-dom";
import { Confirmation } from "../components/Confirmation/Confirmation";
import Flights from "../components/Flights";
import { Paths } from "./routesMap";

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
