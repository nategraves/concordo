import React, { ReactNode } from "react";
import { Switch, Route } from "react-router-dom";

import Locations from "../pages/Locations";
import Review from "../pages/Review";

interface IRoute {
  path: string;
  component: ReactNode;
}

const RouteList: IRoute[] = [
  { path: "/review", component: Review },
  { path: "/locations", component: Locations }
];

const Routes = () => {
  return (
    <Switch>
      {RouteList.map(r => (
        <Route path={r.path}>{r.component}</Route>
      ))}
      <Route exact path="/">
        <Review />
      </Route>
    </Switch>
  );
};

export default Routes;
