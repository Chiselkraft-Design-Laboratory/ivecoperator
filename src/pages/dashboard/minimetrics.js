import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import DefaultCard from "components/cards";
import UpArrowIcon from "assets/uparrowicon";
import DownArrowIcon from "assets/downarrowicon";

const useStyles = ({ accent, high }) =>
  makeStyles(
    (theme) => ({
      root: {
        color: accent,
      },
      metrics: {
        width: "100%",
        height: 60,
      },
      accent: {
        color: high ? theme.palette.T3 : theme.palette.T6,
      },
      icon: {
        marginRight: theme.spacing(0.5),
        fill: high ? theme.palette.T3 : theme.palette.T6,
      },
    }),
    { index: 1 }
  );

const MiniMetrics = ({
  accent,
  title,
  caption,
  value,
  percent,
  high,
  feed,
}) => {
  const cl = useStyles({ accent, high })();

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
    <DefaultCard mini header={header}>
      <Grid container classes={{ root: cl.root }}>
        <Grid item xs>
          <Typography variant="h5">{value}</Typography>
          <Typography variant="caption" classes={{ root: cl.accent }}>
            {high ? (
              <UpArrowIcon className={cl.icon} />
            ) : (
              <DownArrowIcon className={cl.icon} />
            )}
            {percent + "%"}
          </Typography>
        </Grid>
        <Grid item xs={4} classes={{ root: cl.metrics }}>
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
            colors={[accent]}
          />
        </Grid>
      </Grid>
    </DefaultCard>
  );
};

export default MiniMetrics;
