import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";



const NotFound = ({ location }) => {
  return (
    <Fragment>
      <h1 className="mt-5 pt-5 text-center" style={{color:'red'}}>
      <i class="fas fa-exclamation-circle mr-3"></i>
      
        
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
