import React from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(1.5),

      "& > *": {
        width: "100%",
        padding: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
      },
    },
    header: {
      marginBottom: theme.spacing(2),
    },
  }),
  { index: 1 }
);

const DefaultCard = ({ mini, rounded, header, children }) => {
  const cl = useStyles();
  return (
    <Grid item xs={10} md={mini ? 4 : 12} classes={{ root: cl.root }}>
      <Paper square={rounded ? false : true} elevation={4}>
        {header ? (
          <Grid item classes={{ root: cl.header }}>
            {header}
          </Grid>
        ) : null}
        <Grid item xs>
          {children}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default DefaultCard;
