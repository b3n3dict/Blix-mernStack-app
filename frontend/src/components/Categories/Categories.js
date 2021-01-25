import React from "react";
import { Container } from "react-bootstrap";
import "./Categories.css";
import { LinkContainer } from "react-router-bootstrap";
import Properties from "./CategoryImages/properties-logo.png";
// import Vehicles from "./CategoryImages/vehicles-logo.png";
import Furnitures from "./CategoryImages/furniture-logo.png";
import Applicences from "./CategoryImages/appliances-logo.png";
import Electronics from "./CategoryImages/electronics-logo.png";
import Sports from "./CategoryImages/books-and-spots.png";

const Categories = () => {
  return (
    <div>
      <Container className="container mt-5 mb-5 ">
        <div className="row categories">
          <LinkContainer
            style={{ width: "80px !important" }}
            to="/properties"
            className="category-items neu__category"
          >
            <div className="col-md-2 col-4 text-center categoryItems pt-4 pb-4 ">
              <img
                src={Properties}
                alt="Properties-logo"
                className="categoriesLogo"
              />
              <h6 className="mt-3">Properties</h6>
            </div>
          </LinkContainer>
          {/* <LinkContainer to="/vehicles" className="category-items neu__category">
            <div className="col-md-2 col-4 text-center categoryItems pt-4 pb-4">
              <img
                src={Vehicles}
                alt="vehicles-logo"
                className="categoriesLogo"
              />
              <h6 className="mt-3">Vehicles</h6>
            </div>
          </LinkContainer> */}
          <LinkContainer
            to="/furnitures"
            className="category-items neu__category"
          >
            <div className="col-md-2 col-4 text-center categoryItems pt-4 pb-4">
              <img
                src={Furnitures}
                alt="furnitures-logo"
                className="categoriesLogo"
              />
              <h6 className="mt-3">Furnitures</h6>
            </div>
          </LinkContainer>
          <LinkContainer
            to="/appliances"
            className="category-items neu__category"
          >
            <div className="col-md-2 col-4 text-center categoryItems pt-4 pb-4">
              <img
                src={Applicences}
                alt="appliences-logo"
                className="categoriesLogo"
              />
              <h6 className="mt-3"> Appliances</h6>
            </div>
          </LinkContainer>
          <LinkContainer
            to="/electronics"
            className="category-items neu__category"
          >
            <div className="col-md-2 col-4 text-center categoryItems pt-4 pb-4">
              <img
                src={Electronics}
                alt="electronics-logo"
                className="categoriesLogo"
              />
              <h6 className="mt-3">Electronics</h6>
            </div>
          </LinkContainer>
          <LinkContainer to="/sports" className="category-items neu__category">
            <div className="col-md-2 col-4 text-center categoryItems pt-4 pb-4">
              <img src={Sports} alt="sports-logo" className="categoriesLogo" />
              <h6 className="mt-3">Sports</h6>
            </div>
          </LinkContainer>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
