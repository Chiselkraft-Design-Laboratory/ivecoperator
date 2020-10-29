import React from "react";
import { Grid, makeStyles, Typography, Box, Avatar } from "@material-ui/core";
import DefaultCard from "components/cards";
import { ResponsiveChoropleth } from "@nivo/geo";
import worldmap from "dummies/worldmap.json";

const useStyles = () =>
  makeStyles(
    (theme) => ({
      root: {},
      metrics: {
        width: "100%",
        height: 240,
      },
      list: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: theme.spacing(2, 1),
        color: theme.palette.T9,
        borderTop: `1px solid ${theme.palette.D3}`,
        "& > *": {
          "&:first-child": {
            width: 24,
            height: 24,
            marginRight: theme.spacing(1),
            fontSize: "0.6rem",
            background: theme.palette.T9,
          },
        },
      },
    }),
    { index: 1 }
  );

const GeoMetrics = ({ accent, title, caption, value, percent, high, feed }) => {
  const cl = useStyles(high)();

  const header = (
    <React.Fragment>
      {title ? <Typography variant="body1">{title}</Typography> : null}
      {caption ? <Typography variant="caption">{caption}</Typography> : null}
    </React.Fragment>
  );
  return (
    <DefaultCard header={header}>
      <Grid container>
        <Grid item xs={12} classes={{ root: cl.metrics }}>
          <ResponsiveChoropleth
            data={feed}
            features={worldmap.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="nivo"
            domain={[0, 1000000]}
            unknownColor="#666666"
            valueFormat=".2s"
            projectionType="azimuthalEquidistant"
            projectionScale={380}
            projectionTranslation={[0.5, 0.5]}
            projectionRotation={[281, -22, 0]}
            borderWidth={0.5}
            borderColor="#152538"
          />
        </Grid>
        <Grid item xs={12}>
          <Box classes={{ root: cl.list }}>
            <Avatar>JK</Avatar>
            <Typography variant="caption">230 New Customers</Typography>
          </Box>
          <Box classes={{ root: cl.list }}>
            <Avatar>RJ</Avatar>
            <Typography variant="caption">43 Trips</Typography>
          </Box>
          <Box classes={{ root: cl.list }}>
            <Avatar>MB</Avatar>
            <Typography variant="caption">65 Trips</Typography>
          </Box>
          <Box classes={{ root: cl.list }}>
            <Avatar>CH</Avatar>
            <Typography variant="caption">547 Trips</Typography>
          </Box>
          <Box classes={{ root: cl.list }}>
            <Avatar>DL</Avatar>
            <Typography variant="caption">42 Trips</Typography>
          </Box>
        </Grid>
      </Grid>
    </DefaultCard>
  );
};

export default GeoMetrics;
