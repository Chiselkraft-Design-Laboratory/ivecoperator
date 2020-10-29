import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import DefaultCard from "components/cards";
import * as dummies from "dummies/dummymetrics";
import { colors as accent } from "theme/darkslate";
import MiniMetrics from "./minimetrics";
import BarMetrics from "./barmetrics";
import AreaMetrics from "./areametrics";
import GeoMetrics from "./geometrics";

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
        <MiniMetrics
          accent={accent.tone.T8}
          title="parameter"
          value={2847}
          percent={12.26}
          feed={dummies.dummyBarFeed}
        />
        <MiniMetrics
          accent={accent.tone.T9}
          title="parameter"
          value={654}
          percent={34.26}
          high
          feed={dummies.dummyBarFeed}
        />
        <MiniMetrics
          accent={accent.tone.T10}
          title="parameter"
          value={143}
          percent={1.6}
          high
          feed={dummies.dummyBarFeed}
        />
        <BarMetrics
          title="parameter"
          feed={dummies.dummyBarFeed}
          accent={accent.tone.T0}
        />
        <AreaMetrics
          title="parameter"
          feed={dummies.dummyAreaFeed}
          accent={[accent.T8, accent.T9, accent.T10]}
        />
      </Grid>
      <Grid item xs={10} md={3} classes={{ root: cl.grid }}>
        <GeoMetrics title="map" feed={dummies.dummyGeoFeed} />
        <BarMetrics
          title="parameter"
          feed={dummies.dummyBarFeed}
          accent={accent.tone.T0}
        />
        <DefaultCard>card</DefaultCard>
        <DefaultCard>card</DefaultCard>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
