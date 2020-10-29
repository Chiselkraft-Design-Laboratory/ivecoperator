import React from "react";
import { Link, useLocation as location } from "react-router-dom";
import {
  Avatar,
  Box,
  Grid,
  Input,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { urlRoutes } from "constants/routes";

import BrandIcon from "assets/logo";
import SearchIcon from "assets/searchicon";
import FleetIcon from "assets/fleeticon";
import DashboardIcon from "../../assets/dashboardicon";
import UserIcon from "assets/usericon";
import TransactionIcon from "assets/transactionicon";

const useStyles = makeStyles(
  (theme) => ({
    push: { flexGrow: 1 },

    root: {
      padding: theme.spacing(2.5),
    },

    nav: {
      display: "flex",
      flexDirection: "row",
      borderRadius: theme.spacing(3),
      background: theme.palette.D1,
      "& > *": {
        fill: theme.palette.L1,
        color: theme.palette.L1,
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0.85, 3.25),
        borderRadius: theme.spacing(3),
        textDecoration: "none",
        fontWeight: 700,
        transition: "all 0.65s ease-in-out",
        "&:hover": {
          textDecoration: "none",
          cursor: "pointer",
          fontWeight: 700,
        },
      },
    },
    navicon: {
      marginRight: theme.spacing(1),
    },
    active: {
      background: theme.palette.G2,
      color: theme.palette.L1,
      fontWeight: 700,
    },

    searchbar: {
      minWidth: 280,
      marginLeft: theme.spacing(2),
      padding: theme.spacing(0.75, 2),
      borderRadius: theme.spacing(3),
      background: theme.palette.L1,
      fill: theme.palette.L3,
    },
    searchbarinput: {
      fontSize: "0.8rem",
      fontWeight: 500,
      letterSpacing: 0.65,
      color: theme.palette.D3,
      "&::placeholder": {
        fontWeight: 400,
        color: theme.palette.D4,
      },
    },
    profileArea: {
      borderRadius: theme.spacing(1),
      alignItems: "center",
      cursor: "pointer",
      "&:hover": {
        filter: "brightness(1.1)",
      },
    },
    profileText: {
      marginRight: theme.spacing(1),
      textAlign: "right",

      display: "flex",
      flexDirection: "column",
    },
    profileAvatar: {
      width: 32,
      height: 32,
      marginLeft: theme.spacing(1),
    },
  }),
  { index: 1 }
);

const NavBar = ({ onSearchInput }) => {
  const cl = useStyles();
  return (
    <Grid item component="nav">
      <Toolbar classes={{ root: cl.root }}>
        <Box classes={{ root: cl.nav }} boxShadow={8}>
          <div>
            <BrandIcon size={70} />
          </div>
          <Link
            to={urlRoutes.home}
            className={
              location().pathname === urlRoutes.home ? cl.active : null
            }
          >
            <DashboardIcon size={16} className={cl.navicon} />
            Dahsboard
          </Link>
          <Link
            to={urlRoutes.fleet}
            className={
              location().pathname === urlRoutes.fleet ? cl.active : null
            }
          >
            <FleetIcon size={16} className={cl.navicon} />
            Fleet
          </Link>
          <Link
            to={urlRoutes.users}
            className={
              location().pathname === urlRoutes.users ? cl.active : null
            }
          >
            <UserIcon size={16} className={cl.navicon} />
            Users
          </Link>
          <Link
            to={urlRoutes.transactions}
            className={
              location().pathname === urlRoutes.transactions ? cl.active : null
            }
          >
            <TransactionIcon size={16} className={cl.navicon} />
            Transactions
          </Link>
        </Box>
        <Box boxShadow={8} classes={{ root: cl.searchbar }}>
          <Input
            fullWidth
            disableUnderline
            placeholder="search fleet, users & transactions"
            classes={{ input: cl.searchbarinput }}
            // inputProps={{ classes: { input: cl.searchbar } }}
            endAdornment={<SearchIcon size={16} />}
          />
        </Box>
        <div className={cl.push} />
        <Box
          display="flex"
          flexDirection="row"
          classes={{ root: cl.profileArea }}
        >
          <Typography variant="body1">
            <strong>Operator</strong>
          </Typography>
          <Avatar classes={{ root: cl.profileAvatar }} />
        </Box>
      </Toolbar>
    </Grid>
  );
};

export default NavBar;
