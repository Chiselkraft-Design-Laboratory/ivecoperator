import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {},
  }),
  { index: 1 }
);

const DashboardPage = () => {
  const cl = useStyles();

  return (
    <Grid item xs>
      Dashboard
    </Grid>
  );
};

export default DashboardPage;
