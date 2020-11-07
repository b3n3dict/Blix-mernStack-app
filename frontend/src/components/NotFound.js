import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import IconButton from "@material-ui/core/IconButton";
import { createStyles } from "@material-ui/core/styles";


import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const useStyles = makeStyles((theme) => ({
  largeIcon: {
    "& svg": {
      fontSize: 45,
    },
  },
}));

const NotFound = ({ location }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <h1 className="mt-5 pt-5 text-center" style={{color:'red'}}>
      
        <IconButton className={classes.largeIcon} color="secondary">
          <ErrorOutlineIcon />
        </IconButton>
        Page Not Found
      </h1>
      <h3 className="text-center text-x-large">
        Sorry,  <code>{location.pathname}</code> doesn't exist
        <br />
        <br />
        <Button outline className="bg-light">
          <NavLink
            className="text-center text-dark"
            style={{ textDecoration: "none" }}
            to="/"
          >
            Go to Home
          </NavLink>
        </Button>{" "}
      </h3>
    </Fragment>
  );
};

export default NotFound;
