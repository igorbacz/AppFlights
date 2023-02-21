import { Redirect, Route, Switch } from "react-router-dom";
import { ConfirmationPage } from "../views/Confirmation/ConfirmationPage";
import Flights from "./Flights";

const Routes = () => {
  return (
    <Switch>
      <Route path="/flights">
        <Flights />
      </Route>
      <Route path="/confirmation">
        <ConfirmationPage />
      </Route>
      <Route path="*">
        <Redirect to="flights" />
      </Route>
    </Switch>
  );
};

export default Routes;
