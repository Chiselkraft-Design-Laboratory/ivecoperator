import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import MiniMetrics from "./minimetrics";
import AreaMetrics from "./areametrics";
import BarMetrics from "./barmetrics";
import GeoMetrics from "./geometrics";
import IssueMetrics from "./issuemetrics";

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

const DashboardPage = ({ feed }) => {
  const cl = useStyles();
  const dummyBarFeed = [
    { x: "t1", y: 12 },
    { x: "t2", y: 56 },
    { x: "t3", y: 22 },
    { x: "t4", y: 45 },
    { x: "t5", y: 34 },
    { x: "t6", y: 8 },
    { x: "t7", y: 12 },
    { x: "t8", y: 52 },
    { x: "t9", y: 23 },
  ];
  const dummyAreaFeed = [
    {
      id: "japan",
      color: "hsl(287, 70%, 50%)",
      data: [
        { x: "plane", y: 269 },
        { x: "helicopter", y: 295 },
        { x: "boat", y: 15 },
        { x: "train", y: 35 },
        { x: "subway", y: 103 },
        { x: "bus", y: 233 },
        { x: "car", y: 49 },
        { x: "moto", y: 201 },
      ],
    },
    {
      id: "china",
      color: "hsl(222, 70%, 50%)",
      data: [
        { x: "plane", y: 123 },
        { x: "helicopter", y: 232 },
        { x: "boat", y: 115 },
        { x: "train", y: 5 },
        { x: "subway", y: 43 },
        { x: "bus", y: 213 },
        { x: "car", y: 124 },
        { x: "moto", y: 21 },
      ],
    },
  ];
  const dummyGeoFeed = [
    {
      id: "AFG",
      value: 601539,
    },
    {
      id: "AGO",
      value: 134284,
    },
    {
      id: "ALB",
      value: 909456,
    },
    {
      id: "ARE",
      value: 576934,
    },
    {
      id: "ARG",
      value: 334262,
    },
  ];
  const dummyPieFeed = [
    {
      id: "open issues",
      value: 158,
    },
    {
      id: "closed",
      value: 435,
    },
    {
      id: "critical",
      value: 41,
    },
  ];

  return (
    <Grid item xs classes={{ root: cl.root }}>
      <Grid item xs classes={{ root: cl.grid }}>
        <MiniMetrics
          title="Total Distance Covered"
          value={2456}
          percent={25.3}
          high
          feed={dummyBarFeed}
        />
        <MiniMetrics
          title="Total Trips Today"
          value={122}
          percent={11.3}
          high
          feed={dummyBarFeed}
        />
        <MiniMetrics
          title="Total Earnings"
          value="22,343 INR"
          percent={39.2}
          feed={dummyBarFeed}
        />
        <BarMetrics title="Trip Revenue" feed={dummyBarFeed} />
        <AreaMetrics title="Statistics" feed={dummyAreaFeed} />
      </Grid>
      <Grid item xs={10} md={3} classes={{ root: cl.grid }}>
        <GeoMetrics title="Map" feed={dummyGeoFeed} />
        <BarMetrics title="Overall Sale" feed={dummyBarFeed} />
        <IssueMetrics title="Issues" feed={dummyPieFeed} />
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
