import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, makeStyles, Typography } from "@material-ui/core";
import DefaultCard from "components/cards";
import { colors as cc } from "theme/darkslate";

const useStyles = ({ accent }) =>
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

const BarMetrics = ({ accent, title, caption, feed }) => {
  const cl = useStyles({ accent })();

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
      <Box classes={{ root: cl.metrics }}>
        <ResponsiveBar
          data={feed}
          keys={["y"]}
          indexBy="x"
          margin={{ top: 20, right: 0, bottom: 50, left: 60 }}
          axisTop={null}
          axisRight={null}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            tickValues: 4,
            legend: "range",
            legendPosition: "end",
            legendOffset: 32,
          }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "parameter",
            legendPosition: "end",
            legendOffset: 32,
          }}
          padding={0.65}
          isInteractive={false}
          enableLabel={false}
          animate={false}
          enableGridY
          colors={[accent]}
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
      </Box>
    </DefaultCard>
  );
};

export default BarMetrics;
