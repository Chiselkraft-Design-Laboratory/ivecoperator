import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import  NavBar from 'components/navbar'
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import {urlRoutes} from '../constants/routes'

const useStyles = (dialog) =>
  makeStyles(
    (theme) => ({
      root: {
        minHeight: "100vh",
        justifyContent: dialog && "center",
        alignItems: dialog && "center",
      },
    }),
    { index: 1 }
  );

const BaseLayout = ({ dialog, children ,history,location}) => {
  const isLogged = useSelector((state) => state.login.isLogged);

  const cl = useStyles(dialog)();

  if (location().pathname !== urlRoutes.login && !isLogged) {
    history().push(urlRoutes.login);
  }

  return (
    <Grid
      container
      direction="column"
      wrap="nowrap"
      classes={{ root: cl.root }}
    >
       {isLogged?<NavBar />:null}

      {children}
    </Grid>
  );
};

export default withRouter(BaseLayout);
