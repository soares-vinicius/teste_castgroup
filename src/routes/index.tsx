import React from "react";
import { Switch, Route, RouteProps } from "react-router-dom";

import ConstantRoutes from "./routes_array";
import ErrorPage from "../pages/error_page";

export default function Routes(): React.ReactElement {
  function HandleRoutes(props: RouteProps): React.ReactElement {
    return <Route {...props} />;
  }

  return (
    <Switch>
      {ConstantRoutes.map((route) => (
        <HandleRoutes {...route} key={route.path} />
      ))}

      <Route path="*">
        <ErrorPage />
      </Route>
    </Switch>
  );
}
