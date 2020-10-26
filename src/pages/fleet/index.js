import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {},
  }),
  { index: 1 }
);

const FleetPage = () => {
  const cl = useStyles();

  return (
    <Grid item xs>
      Fleet
    </Grid>
  );
};

export default FleetPage;
