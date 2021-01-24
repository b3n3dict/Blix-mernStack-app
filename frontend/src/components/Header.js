import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Badge } from "@material-ui/core";
import logo from "../img/logo.png";
import Search from "./Search";
import { logout } from "../actions/userActions";
import { USER_DETAILS_RESET } from "../constants/userConstants";
import { ORDER_LIST_MY_RESET } from "../constants/orderConstants";
const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const logoutHandler = () => {
    dispatch(logout());
    dispatch({ type: ORDER_LIST_MY_RESET });
    dispatch({ type: USER_DETAILS_RESET });
  };
  //  const searchHandler =(e)=>{

  //   //  <Search searchItem={e.target.value}/>
  //   console.log(e.target.value)
  //  }
  return (
    <header>
      <Navbar
        className="fixed-top mr-5 pl-5 pr-5"
        style={{ backgroundColor: "#ebecf0" }}
        expand="lg"
        collapseOnSelect
      >
        <>
          <LinkContainer to="/">
            <Navbar>
              <Navbar.Brand href="/" className="neuHeader neu__button">
                <img src={logo} width="150px" alt="" />
              </Navbar.Brand>
            </Navbar>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ml-3">
              <div className="row mr-4 ml-1">
                <Route render={({ history }) => <Search history={history} />} />
                {/* <div className="CardInner">
      
        <div className="Icontainer">
        
          <div className="InputContainer">
            <input placeholder="Search" className="search" onChange={(e)=>searchHandler(e)}/>
             
          </div>
            <div className="Icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
        </div>
       </div> */}
                {/* <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2 bg-light"
                    type="search"
                    placeholder="Search Products"
                    aria-label="Search"b
                    style={{
                      textDecoration: "none",
                      borderRadius: "10px",
                      boxShadow: "none",
                    }}
                  />
                  <button className="btn my-2 my-sm-0" type="submit">
                    <i className="fas fa-search text-primary"></i>
                  </button>
                </form> */}
              </div>

              <LinkContainer to="/cart">
                <Nav.Link>
                  CART {""}
                  <Badge badgeContent={cartItems.length} color="primary">
                    <i className="fas fa-shopping-cart"></i>
                  </Badge>
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
        </>
      </Navbar>
    </header>
  );
};

export default Header;
