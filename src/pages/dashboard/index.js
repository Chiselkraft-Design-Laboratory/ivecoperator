import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import DashboardCard from "components/cards";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(1, 3),
      display: "flex",
      flexDirection: "row",
    },
    grid: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyItems: "flex-start",
    },
  }),
  { index: 1 }
);

const DashboardPage = () => {
  const cl = useStyles();

  return (
    <Grid item xs classes={{ root: cl.root }}>
      <Grid item xs classes={{ root: cl.grid }}>
        <DashboardCard mini header="Title">
          content
        </DashboardCard>
        <DashboardCard mini>card</DashboardCard>
        <DashboardCard mini>card</DashboardCard>
        <DashboardCard>card</DashboardCard>
        <DashboardCard>card</DashboardCard>
        <DashboardCard>card</DashboardCard>
      </Grid>
      <Grid item xs={10} md={3} classes={{ root: cl.grid }}>
        <DashboardCard>card</DashboardCard>
        <DashboardCard>card</DashboardCard>
        <DashboardCard>card</DashboardCard>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
