import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Headers() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="home">
            STM Apartment
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link>Price</Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link as={Link} to="login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
