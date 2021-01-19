import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import logo from "../img/logo.jpeg";
import { logout } from "../actions/userActions";
import { USER_DETAILS_RESET } from "../constants/userConstants";
import { ORDER_LIST_MY_RESET } from "../constants/orderConstants";
const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    dispatch({ type: ORDER_LIST_MY_RESET });
    dispatch({ type: USER_DETAILS_RESET });
  };
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
              <div className="row mr-4 ml-1">
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2 bg-light"
                    type="search"
                    placeholder="Search Products"
                    aria-label="Search"
                    style={{
                      textDecoration: "none",
                      borderRadius: "10px",
                      boxShadow: "none",
                    }}
                  />
                  <button className="btn my-2 my-sm-0" type="submit">
                    <i className="fas fa-search text-primary"></i>
                  </button>
                </form>
              </div>

              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> CART
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name.toUpperCase()} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> SIGN IN
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="ADMIN" id="adminmenu">
                  <LinkContainer to="/admin/userList">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productList">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderList">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
