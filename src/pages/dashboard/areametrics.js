import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import DashboardCard from "components/cards/dashboardcard";
import { ResponsiveLine } from "@nivo/line";

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

const AreaMetrics = ({
  accent,
  title,
  caption,
  value,
  percent,
  high,
  feed,
}) => {
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
          <ResponsiveLine
            data={feed}
            // xScale={{ type: "linear" }}
            // yScale={{ type: "linear" }}
            keys={["y"]}
            indexBy="x"
            axisTop={null}
            axisBottom={{
              tickValues: 12,
              legend: "time",
              legendPosition: "end",
              legendOffset: 46,
            }}
            axisRight={null}
            axisLeft={{
              legend: "Pack Current",
              legendPosition: "end",
              legendOffset: -44,
              tickValues: 6,
            }}
            padding={0.2}
            isInteractive={false}
            enableLabel={false}
            animate={false}
            enableGridX={false}
            enableGridY={false}
            curve="monotoneX"
            enableArea
          />
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default AreaMetrics;
