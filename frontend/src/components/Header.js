import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container, Form } from "react-bootstrap";
import logo from "./logo.jpeg";

const Header = () => {
  return (
    <header>
      <Navbar className="fixed-top" bg="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar bg="light">
              <Navbar.Brand href="/">
                <img src={logo} width="150px" alt="" />
              </Navbar.Brand>
            </Navbar>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ml-3">
              <Form>
                <div className="row mr-4 ml-1">
                  <form class="form-inline my-2 my-lg-0">
                    <input
                      class="form-control mr-sm-2 bg-light"
                      type="search"
                      placeholder="Search Products"
                      aria-label="Search"
                      style={{
                        textDecoration: "none",
                        borderRadius: "10px",
                        boxShadow: "none",
                      }}
                    />
                    <button class="btn my-2 my-sm-0" type="submit">
                      <i class="fas fa-search text-primary"></i>
                    </button>
                  </form>
                </div>
              </Form>

              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> CART
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i> SIGN IN
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
