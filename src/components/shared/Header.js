import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Covid Tracker
          </Typography>

          <Button color="inherit">DashBoard</Button>
          <Button color="inherit">compare states</Button>
          <Button color="inherit">search state</Button>
          <Button color="inherit">vaccination</Button>
          <Button color="inherit">rt-pcr samples</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
