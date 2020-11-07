import React from "react";
import { Container } from "react-bootstrap";
import "./Categories.css";
import { LinkContainer } from "react-router-bootstrap";

const Categories = () => {
  return (
    <div>
      <Container className="container mt-5">
        <div className="row">
          <LinkContainer to="/properties">
            <div className="col-md-2 col-4 text-center categoryItems pt-3 pb-3 w-80">
              <i className="far fa-building fa-2x categoryIcon"></i>{" "}
              <h6 className="mt-3">Properties</h6>
            </div>
          </LinkContainer>
          <LinkContainer to="/vehicles">
            <div className="col-md-2 col-4 text-center categoryItems pt-3 pb-3 w-80">
              <i className="fas fa-motorcycle fa-2x categoryIcon"></i>{" "}
              <h6 className="mt-3">Vehicles</h6>
            </div>
          </LinkContainer>
          <LinkContainer to="/furnitures">
            <div className="col-md-2 col-4 text-center categoryItems pt-3 pb-3">
              <i className="fas fa-couch fa-2x categoryIcon "></i>
              <h6 className="mt-3">Furnitures</h6>
            </div>
          </LinkContainer>
          <LinkContainer to="/appliances">
            <div className="col-md-2 col-4 text-center categoryItems pt-3 pb-3">
              <i className="fas fa-blender-phone fa-2x categoryIcon"></i>
              <h6 className="mt-3"> Appliances</h6>
            </div>
          </LinkContainer>
          <LinkContainer to="/electronics">
            <div className="col-md-2 col-4 text-center categoryItems pt-3 pb-3">
              <i className="fas fa-mobile fa-2x categoryIcon"></i>
              <h6 className="mt-3">Electronics</h6>
            </div>
          </LinkContainer>
          <LinkContainer to="/sports">
            <div className="col-md-2 col-4 text-center categoryItems pt-3 pb-3">
              <i className="fas fa-dumbbell fa-2x categoryIcon"></i>{" "}
              <h6 className="mt-3">Sports</h6>
            </div>
          </LinkContainer>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
