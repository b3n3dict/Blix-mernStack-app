import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import "./Categories.css";
import { LinkContainer } from "react-router-bootstrap";
import Properties from "./CategoryImages/properties-logo.png";
import Vehicles from "./CategoryImages/vehicles-logo.png";
import Furnitures from "./CategoryImages/furniture-logo.png";
import Applicences from "./CategoryImages/appliances-logo.png";
import Electronics from "./CategoryImages/electronics-logo.png";
import Sports from "./CategoryImages/books-and-spots.png";


const Categories = () => {
  return (
    <div>
      <Container className="container mt-5 mb-5">
        <Row>
          <LinkContainer to="/properties">
            <Col md={2} s={4} className="text-center categoryItems pt-3 pb-3 w-80">
            <img src={Properties} alt="Properties-logo" className="categoriesLogo"/>
              <h6 className="mt-3">Properties</h6>
            </Col>
          </LinkContainer>
          <LinkContainer to="/vehicles">
            <Col md={2} s={4} className="text-center categoryItems pt-3 pb-3 w-80">
            <img src={Vehicles} alt="vehicles-logo" className="categoriesLogo"/>
              <h6 className="mt-3">Vehicles</h6>
            </Col>
          </LinkContainer>
          <LinkContainer to="/furnitures">
            <Col md={2} s={4} className="text-center categoryItems pt-3 pb-3 w-80">
            <img src={Furnitures} alt="furnitures-logo" className="categoriesLogo"/>
              <h6 className="mt-3">Furnitures</h6>
            </Col>
          </LinkContainer>
          <LinkContainer to="/appliances">
            <Col md={2} s={4} className="text-center categoryItems pt-3 pb-3 w-80">
            <img src={Applicences} alt="appliences-logo" className="categoriesLogo"/>
              <h6 className="mt-3"> Appliances</h6>
            </Col>
          </LinkContainer>
          <LinkContainer to="/electronics">
            <Col md={2} s={4} className="text-center categoryItems pt-3 pb-3 w-80">
            <img src={Electronics} alt="electronics-logo" className="categoriesLogo"/>
              <h6 className="mt-3">Electronics</h6>
            </Col>
          </LinkContainer>
          <LinkContainer to="/sports">
            <Col md={2} s={4} className="text-center categoryItems pt-3 pb-3 w-80">
            <img src={Sports} alt="sports-logo" className="categoriesLogo"/>
              <h6 className="mt-3">Sports</h6>
            </Col>
          </LinkContainer>
        </Row>
      </Container>
    </div>
  );
};

export default Categories;