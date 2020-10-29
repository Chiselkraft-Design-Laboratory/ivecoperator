import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { urlRoutes } from "constants/routes";

const LoginPage = lazy(() => import("pages/login"));
const DashboardPage = lazy(() => import("pages/dashboard"));
const FleetPage = lazy(() => import("pages/fleet"));
const UsersPage = lazy(() => import("pages/users"));
const TransactionsPage = lazy(() => import("pages/transactions"));

const PageView = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={urlRoutes.home}>
            <DashboardPage />
          </Route>
          <Route exact path={urlRoutes.fleet}>
            <FleetPage />
          </Route>
          <Route exact path={urlRoutes.users}>
            <UsersPage />
          </Route>
          <Route path={urlRoutes.transactions}>
            <TransactionsPage />
          </Route>
          <Route path={urlRoutes.login}>
            <LoginPage />
          </Route>
        </Switch>
      </Suspense>
    </React.Fragment>
  );
};

export default PageView;
