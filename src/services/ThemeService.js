import React from "react";
import darkslate from "theme/darkslate";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";

// theme customizations and overrides
const theme = darkslate;

// global PROPS resets
theme.props = {};

// global CSS resets
theme.overrides = {
  MuiCssBaseline: {
    "@global": {
      html: {
        WebkitFontSmoothing: "auto",
      },
    },
  },

  MuiPaper: {
    rounded: {
      borderRadius: theme.spacing(2),
    },
  },
  MuiButton: {
    root: {},
    text: {
      padding: theme.spacing(1, 4),
      textTransform: "capitalize",
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyItems: "center",
    },
    disabled: {
      color: theme.palette.D4,
      fill: theme.palette.D4,
      background: theme.palette.D3,
    },
  },
};

const ThemeService = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};
export default ThemeService;

// © 2020 • Chiselkraft Design Laboratory Pvt Ltd
