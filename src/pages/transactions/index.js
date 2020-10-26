import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {},
  }),
  { index: 1 }
);

const TransactionsPage = () => {
  const cl = useStyles();

  return (
    <Grid item xs>
      Transactions
    </Grid>
  );
};

export default TransactionsPage;
