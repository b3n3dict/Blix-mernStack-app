import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      variant="primary"
      style={{
        width: "50px",
        height: "50px",
        padding: "30px",
        margin: "auto",
        display: "block",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="d-flex align-items-center"
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loader;
