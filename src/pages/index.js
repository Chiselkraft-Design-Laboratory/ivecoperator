import React, { Suspense, lazy } from "react";

const LoginPage = lazy(() => import("pages/login"));
const DashboardPage = lazy(() => import("pages/dashboard"));
const FleetPage = lazy(() => import("pages/fleet"));
const UsersPage = lazy(() => import("pages/users"));
const TransactionsPage = lazy(() => import("pages/transactions"));

const PageView = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <LoginPage />
        <DashboardPage />
        <FleetPage />
        <UsersPage />
        <TransactionsPage />
      </Suspense>
    </React.Fragment>
  );
};

export default PageView;
