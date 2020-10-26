import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = (dialog) =>
  makeStyles(
    (theme) => ({
      root: {
        minHeight: "100vh",
        justifyContent: dialog && "center",
        alignItems: dialog && "center",
      },
    }),
    { index: 1 }
  );

const BaseLayout = ({ dialog, children }) => {
  const cl = useStyles(dialog)();
  return (
    <Grid
      container
      direction="column"
      wrap="nowrap"
      classes={{ root: cl.root }}
    >
      {children}
    </Grid>
  );
};

export default BaseLayout;
