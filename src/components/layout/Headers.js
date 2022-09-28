import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function Headers() {
  const token = localStorage.getItem('authorization');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authorization');
    // window.location.reload();
    navigate('/');
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="home" className="title-fs fw-bold">
            STM Apartment
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            {token && token !== 'undefined' ? (
              <Nav>
                <Nav.Link as={Link} to="transaksi">
                  Transaction
                </Nav.Link>
                <Nav.Link as={Link} to="list-apartments">
                  List Apartment
                </Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link as={Link} to="home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
