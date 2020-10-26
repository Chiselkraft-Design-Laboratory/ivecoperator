import React from "react";
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Link,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import BrandIcon from "assets/logo";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    dialog: {
      width: "100%",
      height: "100%",
      padding: theme.spacing(8, 3),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      "& > svg": {
        fill: theme.palette.L1,
        marginBottom: theme.spacing(2),
      },
    },
    formcontrol: {
      alignItems: "center",
      marginTop: theme.spacing(3),
      "& > *": {
        justifyContent: "center",
      },
      "& > * > input": {
        maxWidth: 280,
        padding: theme.spacing(1.5),
        borderRadius: theme.spacing(3),
        background: theme.palette.L1,
        color: theme.palette.D2,
        fill: theme.palette.L1,
      },
    },
    btnsignin: {
      // minWidth: 200,
      margin: theme.spacing(2, 0),
      padding: theme.spacing(1, 6),

      border: "2px solid",
      borderRadius: theme.spacing(4),

      borderColor: theme.palette.D3,
      background: theme.palette.G1,
      color: theme.palette.D1,

      fontWeight: 500,
      fontSize: "1rem",

      "&:hover": {
        borderColor: theme.palette.T1,
        background: theme.palette.D1,
        color: theme.palette.L1,
        // filter: "brightness(0.8)",
      },
    },
    link: {
      textDecoration: "none",
      color: theme.palette.L1,
      "&:hover": {
        color: theme.palette.L2,
      },
    },
  }),
  { index: 1 }
);

const LoginPage = () => {
  const cl = useStyles();

  return (
    <Grid item xs classes={{ root: cl.root }}>
      <Grid item xs={10} md={6}>
        <Paper elevation={12} classes={{ root: cl.dialog }}>
          <BrandIcon size={128} />
          <form autoComplete={"off"}>
            <FormControl fullWidth classes={{ root: cl.formcontrol }}>
              {/* <InputLabel htmlFor="sign-in form">username</InputLabel> */}
              <Input
                disableUnderline
                required
                fullWidth
                placeholder="username"
              />
            </FormControl>
            <FormControl fullWidth classes={{ root: cl.formcontrol }}>
              <Input
                disableUnderline
                required
                fullWidth
                type="password"
                placeholder="password"
              />
            </FormControl>
            <FormControl fullWidth classes={{ root: cl.formcontrol }}>
              <Button size="medium" classes={{ root: cl.btnsignin }}>
                Sign In
              </Button>
            </FormControl>
          </form>
          <Link href="#" classes={{ root: cl.link }}>
            <Typography variant="caption">forgot password?</Typography>
          </Link>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
