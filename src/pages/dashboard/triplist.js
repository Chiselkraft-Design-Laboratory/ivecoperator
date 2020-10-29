import React from "react";
import {
  makeStyles,
  Table,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
} from "@material-ui/core";
import DefaultCard from "components/cards";

const useStyles = makeStyles(
  (theme) => ({
    root: {},
    head: {
      "& > *": {
        color: theme.palette.T0,
        fontWeight: 700,
      },
    },
    body: {
      "& > *": {
        color: theme.palette.L2,
      },
    },
  }),
  { index: 1 }
);

const TripList = ({ title, feed }) => {
  const cl = useStyles();
  console.log("feed", Array.isArray(feed));
  return (
    <DefaultCard header={title}>
      <Table>
        <TableHead>
          <TableRow classes={{ root: cl.head }}>
            <TableCell>id</TableCell>
            <TableCell>distance</TableCell>
            <TableCell>time</TableCell>
            <TableCell>fare</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {feed.map((trip, index) => {
            return (
              <TableRow key={index} classes={{ root: cl.body }}>
                <TableCell>{trip.uid}</TableCell>
                <TableCell>{trip.distance}</TableCell>
                <TableCell>{trip.time}</TableCell>
                <TableCell>{trip.fare}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </DefaultCard>
  );
};

export default TripList;
