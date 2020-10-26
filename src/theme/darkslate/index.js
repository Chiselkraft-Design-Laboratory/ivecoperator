import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

// color swatch >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const dark = {
  D0: "#27293A",
  D1: "#404354",

  X1: "#1E2033", //space cadet
  X2: "#313345", //space cadet
  X3: "#474E66", //independence
  X4: "#70778F", //rhytm
};

const lite = {
  X1: "#FFFFFF", //white
  X2: "#E1E0E0", //gainsboro
  X3: "#C6C4BE", //silver
};

const tone = {
  T0: "#4DC18D",
  T1: "#00EABD", //sea green crayola
  T2: "#9FCE3E", //yellow green
  T3: "#52F06A", //spring green
  T4: "#FFDF31", //yellow pantone
  T5: "#FF5349", //orange red crayola

  T6: "#FF6565",
  T7: "#FF8373",
  T8: "#FFF46A",
  T9: "#5BD4EB",
  T10: "#7B62E3",
};

const gradient = {
  G1: `linear-gradient(-45deg, ${tone.T1} 30%, ${tone.T2} 100%)`,
  G2: `linear-gradient(0deg, ${dark.X3} 0%, ${dark.T0} 100%)`,
};
// color swatch <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// theme provider >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let darkslateTheme = createMuiTheme({
  palette: {
    type: "dark",

    background: {
      default: dark.D0,
      paper: dark.D1,
    },

    text: {
      primary: lite.X1,
      secondary: lite.X2,
      disabled: lite.X3,
    },

    info: { main: lite.X3 },
    success: { main: tone.T3 },
    warning: { main: tone.T4 },
    error: { main: tone.T5 },

    D0: dark.D0,
    D1: dark.D1,
    D2: dark.X1,
    D3: dark.X2,
    D4: dark.X3,
    D5: dark.X4,

    L1: lite.X1,
    L2: lite.X2,
    L3: lite.X3,

    T0: tone.T0,
    T1: tone.T1,
    T2: tone.T2,
    T3: tone.T3,
    T4: tone.T4,
    T5: tone.T5,
    T6: tone.T6,
    T7: tone.T7,
    T8: tone.T8,
    T9: tone.T9,
    T10: tone.T10,

    G1: gradient.G1,
    G2: gradient.G2,
  },
});
// theme provider <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

export default responsiveFontSizes(darkslateTheme);
export const colors = { dark, lite, tone, gradient };
