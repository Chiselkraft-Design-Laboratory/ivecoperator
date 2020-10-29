import React from "react";
import { withRouter } from "react-router-dom";
import BaseLayout from "layouts/baselayout";
import PageView from "pages";
import NavBar from "components/navbar";
import { urlRoutes } from "constants/routes";

class IvecOperatorApp extends React.Component {
  render() {
    const dialog = this.props.location.pathname === urlRoutes.login;
    return (
      <BaseLayout>
        {!dialog && <NavBar />}
        <PageView />
      </BaseLayout>
    );
  }
}

export default withRouter(IvecOperatorApp);
