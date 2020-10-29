import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import DefaultCard from "components/cards";
import { ResponsiveChoropleth } from "@nivo/geo";
import worldmap from "dummies/worldmap.json";

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
        <Grid item xs classes={{ root: cl.metrics }}>
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
      </Grid>
    </DefaultCard>
  );
};

export default GeoMetrics;
