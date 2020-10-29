import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {},
  }),
  { index: 1 }
);

const LoginPage = () => {
  const cl = useStyles();

  return (
    <Grid item xs>
      Login
    </Grid>
  );
};

export default LoginPage;
