import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Nav,Navbar, Container} from 'react-bootstrap'
const Header = () => {
    return (
        <header>
           <Navbar bg="light" expand="lg" collapseOnSelect>
           <Container>
           <LinkContainer to="/">
  <Navbar.Brand >KRENT</Navbar.Brand>
           </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <LinkContainer to="/cart">
      <Nav.Link ><i className='fas fa-shopping-cart'></i> CART</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/login">
      <Nav.Link ><i className='fas fa-user'></i> SIGN IN</Nav.Link>
      </LinkContainer>
    </Nav>
           
  </Navbar.Collapse>
  </Container>
</Navbar>

        </header>
    )
}

export default Header
