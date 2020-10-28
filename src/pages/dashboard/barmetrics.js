import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import DashboardCard from "components/cards/dashboardcard";
import { ResponsiveBar } from "@nivo/bar";

const useStyles = (high) =>
  makeStyles(
    (theme) => ({
      root: {},
      metrics: {
        width: "100%",
        height: 240,
      },
      accent: {
        color: high ? theme.palette.T3 : theme.palette.T5,
      },
    }),
    { index: 1 }
  );

const BarMetrics = ({ accent, title, caption, value, percent, high, feed }) => {
  const cl = useStyles(high)();

  const header = (
    <React.Fragment>
      {title ? <Typography variant="body1">{title}</Typography> : null}
      {caption ? <Typography variant="caption">{caption}</Typography> : null}
    </React.Fragment>
  );
  return (
    <DashboardCard header={header}>
      <Grid container>
        <Grid item xs classes={{ root: cl.metrics }}>
          <ResponsiveBar
            data={feed}
            keys={["y"]}
            indexBy="x"
            axisTop={null}
            axisRight={null}
            axisLeft={null}
            axisBottom={null}
            padding={0.2}
            isInteractive={false}
            enableLabel={false}
            animate={false}
            enableGridX={false}
            enableGridY={false}
          />
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default BarMetrics;
