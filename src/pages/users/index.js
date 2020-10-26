import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {},
  }),
  { index: 1 }
);

const UsersPage = () => {
  const cl = useStyles();

  return (
    <Grid item xs>
      Users
    </Grid>
  );
};

export default UsersPage;
