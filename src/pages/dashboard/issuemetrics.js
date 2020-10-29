import React from "react";
import { Grid, Paper, makeStyles, Typography } from "@material-ui/core";
import DefaultCard from "components/cards";
import { ResponsivePie } from "@nivo/pie";

const useStyles = (accent) =>
  makeStyles(
    (theme) => ({
      root: {
        padding: theme.spacing(1.5),

        "& > *": {
          width: "100%",
          padding: theme.spacing(2),
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          background: theme.palette.T7,
          color: theme.palette.L1,
        },
      },
      header: {
        marginBottom: theme.spacing(2),
      },
      metrics: {
        width: "100%",
        height: 260,
      },
    }),
    { index: 1 }
  );

const IssueMetrics = ({ accent, title, caption, feed }) => {
  const cl = useStyles(accent)();

  const header = (
    <React.Fragment>
      {title ? <Typography variant="body1">{title}</Typography> : null}
      {caption ? <Typography variant="caption">{caption}</Typography> : null}
    </React.Fragment>
  );
  return (
    <Grid item xs={10} md={12} classes={{ root: cl.root }}>
      <Paper square elevation={4}>
        {header ? (
          <Grid item classes={{ root: cl.header }}>
            {title}
          </Grid>
        ) : null}
        <Grid item xs>
          <Grid container>
            <Grid item xs classes={{ root: cl.metrics }}>
              <ResponsivePie
                data={feed}
                keys={["y"]}
                startAngle={-90}
                endAngle={90}
                indexBy="x"
                axisTop={null}
                axisRight={null}
                axisLeft={null}
                axisBottom={null}
                innerRadius={0.5}
                padAngle={0.75}
                cornerRadius={2}
                colors={{ scheme: "nivo" }}
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor={{ from: "color" }}
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#333333"
                enableRadialLabels={false}
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default IssueMetrics;
