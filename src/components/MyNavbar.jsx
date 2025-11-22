import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Button from './Button';

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">
          <Image src="/images/logo-h.svg" alt="Logo" width="70" />
        </Navbar.Brand>
        <Nav>
            <Link to="agendar" smooth={true} duration={500}>
              <Button
                variant="dark"
                size="sm"
                className="mobile-only hover-scale"
                aria-label="Fazer Agendamento"
              >
                Agendar
              </Button>
            </Link>
          
          </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
       
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#servicos">Serviços</Nav.Link>
            <Nav.Link href="#local">Localização</Nav.Link>
            <Nav.Link href="#galeria">Galeria</Nav.Link>

          </Nav>
          <Nav>
            <Link to="agendar" smooth={true} duration={500}>
              <Button
                variant="dark"
                size="sm"
                className="hover-scale"
                aria-label="Fazer Agendamento"
              >
                Fazer Agendamento
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
