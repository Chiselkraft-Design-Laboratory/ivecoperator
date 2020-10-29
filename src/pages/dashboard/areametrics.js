import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { ResponsiveLine } from "@nivo/line";
import DefaultCard from "components/cards";
import { colors as cc } from "theme/darkslate";

const useStyles = (accent) =>
  makeStyles(
    (theme) => ({
      root: {
        color: accent,
      },
      metrics: {
        width: "100%",
        height: 260,
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
  const cl = useStyles(accent[0])();

  const header = (
    <React.Fragment>
      {title ? (
        <Typography className={cl.root} variant="body1">
          {title}
        </Typography>
      ) : null}
      {caption ? (
        <Typography className={cl.root} variant="caption">
          {caption}
        </Typography>
      ) : null}
    </React.Fragment>
  );

  return (
    <DefaultCard header={header}>
      <Grid container>
        <Grid item xs classes={{ root: cl.metrics }}>
          <ResponsiveLine
            data={feed}
            margin={{ top: 20, right: 0, bottom: 50, left: 60 }}
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
            colors={{ datum: "color" }}
            theme={{
              textColor: cc.dark.X4,
              fontSize: 13,
              axis: {
                domain: {
                  line: {
                    stroke: cc.dark.D0,
                    strokeWidth: 0,
                  },
                },
              },
              grid: {
                line: {
                  stroke: cc.dark.X3,
                  strokeWidth: 2,
                  strokeDasharray: [2, 12],
                },
              },
            }}
          />
        </Grid>
      </Grid>
    </DefaultCard>
  );
};

export default AreaMetrics;
