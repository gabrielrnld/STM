import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Headers() {
  const token = localStorage.getItem("authorization");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authorization");
    window.location.reload();
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="home" className="title-fs fw-bold">
            STM Apartment
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link>Price</Nav.Link>
              <Nav.Link>About</Nav.Link>
              {token && token !== "undefined" ? (
                <Nav.Link as="button" onClick={handleLogout}>
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
