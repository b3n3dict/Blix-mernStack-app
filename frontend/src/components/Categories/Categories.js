import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import "./Categories.css";
import { LinkContainer } from "react-router-bootstrap";

const Categories = () => {
  return (
    <div>
      <Container className="container mt-5 mb-5">
        <Row>
          <LinkContainer to="/properties">
            <Col md={2} s={4} className="text-center categoryItems pt-3 pb-3 w-80">
              <i className="far fa-building fa-2x categoryIcon"></i>{" "}
              <h6 className="mt-3">Properties</h6>
            </Col>
          </LinkContainer>
          <LinkContainer to="/vehicles">
            <Col md={2} s={4} className="text-center categoryItems pt-3 pb-3 w-80">
              <i className="fas fa-motorcycle fa-2x categoryIcon"></i>{" "}
              <h6 className="mt-3">Vehicles</h6>
            </Col>
          </LinkContainer>
          <LinkContainer to="/furnitures">
            <Col md={2} s={4} className="text-center categoryItems pt-3 pb-3 w-80">
              <i className="fas fa-couch fa-2x categoryIcon "></i>
              <h6 className="mt-3">Furnitures</h6>
            </Col>
          </LinkContainer>
          <LinkContainer to="/appliances">
            <Col md={2} s={4} className="text-center categoryItems pt-3 pb-3 w-80">
              <i className="fas fa-blender-phone fa-2x categoryIcon"></i>
              <h6 className="mt-3"> Appliances</h6>
            </Col>
          </LinkContainer>
          <LinkContainer to="/electronics">
            <Col md={2} s={4} className="text-center categoryItems pt-3 pb-3 w-80">
              <i className="fas fa-mobile fa-2x categoryIcon"></i>
              <h6 className="mt-3">Electronics</h6>
            </Col>
          </LinkContainer>
          <LinkContainer to="/sports">
            <Col md={2} s={4} className="text-center categoryItems pt-3 pb-3 w-80">
              <i className="fas fa-dumbbell fa-2x categoryIcon"></i>{" "}
              <h6 className="mt-3">Sports</h6>
            </Col>
          </LinkContainer>
        </Row>
      </Container>
    </div>
  );
};

export default Categories;
