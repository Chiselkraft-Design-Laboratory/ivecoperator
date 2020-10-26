import React from "react";

import BaseLayout from "layout/baselayout";
import PageView from "pages";
import NavBar from "components/navbar";

class IvecOperatorApp extends React.Component {
  render() {
    return (
      <BaseLayout>
        {/* render navbar only if logged in */}
        <NavBar />
        <PageView />
      </BaseLayout>
    );
  }
}

export default IvecOperatorApp;
