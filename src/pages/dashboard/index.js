import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import DefaultCard from "components/cards";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(1, 3),
      display: "flex",
      flexDirection: "row",

      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    grid: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start",
    },
  }),
  { index: 1 }
);

const DashboardPage = () => {
  const cl = useStyles();

  return (
    <Grid item xs classes={{ root: cl.root }}>
      <Grid item xs classes={{ root: cl.grid }}>
        <DefaultCard mini header="Title">
          content
        </DefaultCard>
        <DefaultCard mini header="Title">
          content
        </DefaultCard>
        <DefaultCard mini header="Title">
          content
        </DefaultCard>
        <DefaultCard>card</DefaultCard>
        <DefaultCard>card</DefaultCard>
        <DefaultCard>card</DefaultCard>
      </Grid>
      <Grid item xs={10} md={3} classes={{ root: cl.grid }}>
        <DefaultCard>card</DefaultCard>
        <DefaultCard>card</DefaultCard>
        <DefaultCard>card</DefaultCard>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
